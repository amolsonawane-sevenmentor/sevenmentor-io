import React, { useEffect, useRef, useCallback } from "react";

const TrustIndexWidget = () => {
  const trustindexRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  const loadTrustIndexScript = useCallback(() => {
    if (scriptLoadedRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?753fc0a39c12031b46766b5204c";
    script.async = true;

    if (trustindexRef.current) {
      trustindexRef.current.appendChild(script);
    }

    scriptLoadedRef.current = true;

    return () => {
      if (trustindexRef.current && trustindexRef.current.contains(script)) {
        trustindexRef.current.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadTrustIndexScript();
        observer.disconnect();
      }
    });

    if (trustindexRef.current) {
      observer.observe(trustindexRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loadTrustIndexScript]);

  return (
    <div
      ref={trustindexRef}
      className="trustindex-widget"
      data-id="753fc0a39c12031b46766b5204c"
    ></div>
  );
};

export default TrustIndexWidget;
