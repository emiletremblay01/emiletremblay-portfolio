import { useState, useEffect } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const userAgent: string = window.navigator.userAgent;
    const mobileKeywords: string[] = [
      "Android",
      "webOS",
      "iPhone",
      "iPad",
      "iPod",
      "BlackBerry",
      "Windows Phone",
    ];

    const isMobileDevice: boolean = mobileKeywords.some((keyword) =>
      userAgent.includes(keyword),
    );

    setIsMobile(isMobileDevice);
  }, []);

  return isMobile;
};

export default useIsMobile;
