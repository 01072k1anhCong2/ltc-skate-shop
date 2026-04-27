export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://ltc-skate-shop.onrender.com';

// Khi đã deploy dùng link Render trực tiếp ở đây
// export const BASE_URL = 'https://ltc-skate-shop.onrender.com'; 

export const PRODUCTS_URL = '/api/products';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';