'use client';

import { useEffect } from 'react';

/**
 * PerformanceWrapper component to optimize page performance
 * This helps reduce Total Blocking Time by optimizing resource loading
 */
export default function PerformanceWrapper({ children }) {
  useEffect(() => {
    // Optimize resource loading priority
    const optimizeResources = () => {
      // Find and defer non-critical images
      document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading') && !isInViewport(img)) {
          img.setAttribute('loading', 'lazy');
        }
      });

      // Defer non-critical CSS
      document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        if (!link.hasAttribute('media') && !link.href.includes('critical')) {
          link.setAttribute('media', 'print');
          link.setAttribute('onload', "this.media='all'");
        }
      });
    };

    // Check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Run optimization after first paint
    if (document.readyState === 'complete') {
      optimizeResources();
    } else {
      window.addEventListener('load', optimizeResources);
      return () => window.removeEventListener('load', optimizeResources);
    }
  }, []);

  return <>{children}</>;
}