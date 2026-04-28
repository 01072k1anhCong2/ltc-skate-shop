import dotenv from 'dotenv';
dotenv.config();
const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, PAYPAL_API_URL } = process.env;

/**
 * Fetches an access token from the PayPal API.
 */
async function getPayPalAccessToken() {
  const auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_APP_SECRET).toString(
    'base64'
  );

  const url = `${PAYPAL_API_URL}/v1/oauth2/token`;

  const headers = {
    Accept: 'application/json',
    'Accept-Language': 'en_US',
    Authorization: `Basic ${auth}`,
  };

  const body = 'grant_type=client_credentials';
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });

  if (!response.ok) throw new Error('Failed to get access token');

  const paypalData = await response.json();

  return paypalData.access_token;
}

/**
 * Checks if a PayPal transaction is new by comparing the transaction ID with existing orders in the database.
 */
export async function checkIfNewTransaction(orderModel, paypalTransactionId) {
  try {
    const orders = await orderModel.find({
      'paymentResult.id': paypalTransactionId,
    });

    return orders.length === 0;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Verifies a PayPal payment by making a GET request to the PayPal API.
 * Dùng để kiểm tra trạng thái order (không capture).
 */
export async function verifyPayPalPayment(paypalTransactionId) {
  const accessToken = await getPayPalAccessToken();
  const paypalResponse = await fetch(
    `${PAYPAL_API_URL}/v2/checkout/orders/${paypalTransactionId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!paypalResponse.ok) throw new Error('Failed to verify payment');

  const paypalData = await paypalResponse.json();
  return {
    verified: paypalData.status === 'COMPLETED',
    value: paypalData.purchase_units[0].amount.value,
  };
}

/**
 * Captures a PayPal order server-side bằng cách gọi POST /v2/checkout/orders/:id/capture.
 * Đây là cách an toàn, không phụ thuộc vào browser session của buyer.
 *
 * @param {string} paypalOrderId - PayPal order ID từ frontend (data.orderID)
 * @returns {Promise<Object>} { captured: boolean, id: string, value: string, email_address: string, update_time: string }
 */
export async function capturePayPalPayment(paypalOrderId) {
  const accessToken = await getPayPalAccessToken();

  const paypalResponse = await fetch(
    `${PAYPAL_API_URL}/v2/checkout/orders/${paypalOrderId}/capture`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!paypalResponse.ok) {
    const errData = await paypalResponse.json().catch(() => ({}));
    throw new Error(
      errData?.message || `Failed to capture PayPal payment: ${paypalResponse.status}`
    );
  }

  const paypalData = await paypalResponse.json();

  const capture =
    paypalData.purchase_units?.[0]?.payments?.captures?.[0];

  return {
    captured: paypalData.status === 'COMPLETED',
    id: capture?.id || paypalData.id,
    value: capture?.amount?.value || paypalData.purchase_units?.[0]?.amount?.value,
    email_address: paypalData.payer?.email_address || '',
    update_time: capture?.update_time || paypalData.update_time || new Date().toISOString(),
    status: paypalData.status,
  };
}