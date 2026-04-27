import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const injectScript = document.createElement('script');
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    injectScript.async = true;

    const configScript = document.createElement('script');
    configScript.src = "https://files.bpcontent.cloud/2026/04/20/12/20260420124655-QTF1ERVR.js";
    configScript.defer = true;

    // Chỉ nạp script cấu hình SAU KHI script nền tảng đã tải xong
    injectScript.onload = () => {
      document.body.appendChild(configScript);
    };

    document.body.appendChild(injectScript);

    return () => {
      // Dọn dẹp scripts
      if (document.body.contains(injectScript)) {
        document.body.removeChild(injectScript);
      }
      if (document.body.contains(configScript)) {
        document.body.removeChild(configScript);
      }
      
      const botpressElement = document.getElementById('bp-web-widget');
      if (botpressElement) {
        botpressElement.remove();
      }
    };
  }, []);

  return null;
};

export default Chatbot;