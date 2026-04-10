// GoogleAnalytics.tsx
// Add your own Google Analytics tracking ID below to enable analytics.
// Replace 'G-XXXXXXXXXX' with your GA4 Measurement ID.

import React from "react";
import Script from "next/script";

const GA_TRACKING_ID = ""; // TODO: Add your GA4 tracking ID here

const GoogleAnalytics = () => {
  if (!GA_TRACKING_ID) return null;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
