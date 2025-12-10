'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

/**
 * ScriptOptimizer component to defer non-critical scripts
 * This helps reduce Total Blocking Time by loading scripts at appropriate times
 */
export default function ScriptOptimizer({ children }) {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Mark as ready after first paint
    if (document.readyState === 'complete') {
      setIsReady(true);
    } else {
      // Wait for page to be fully loaded
      const handleLoad = () => {
        // Delay non-critical scripts to reduce blocking time
        setTimeout(() => setIsReady(true), 2000);
      };
      
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {children}
      
      {/* Load analytics and other third-party scripts only after page is interactive */}
      {isReady && (
        <>
          {/* Add your third-party scripts here with strategy="lazyOnload" */}
          <Script 
            id="gtm-script"
            strategy="lazyOnload"
            src="https://www.googletagmanager.com/gtag/js"
          />

          {/* Any other third-party scripts */}
        </>
      )}
    </>
  );
}