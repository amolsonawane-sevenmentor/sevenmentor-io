'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

/**
 * Utility function to dynamically import components with loading fallback
 * This helps reduce Total Blocking Time by deferring non-critical component loading
 * 
 * @param {Function} importFunc - The import function for the component
 * @param {Object} options - Additional options for dynamic import
 * @returns {React.Component} - The dynamically loaded component
 */
export function lazyLoad(importFunc, options = {}) {
  const LazyComponent = dynamic(() => importFunc, {
    loading: () => options.loading || <div className="lazy-loading">Loading...</div>,
    ssr: options.ssr !== undefined ? options.ssr : true,
    ...options
  });

  return (props) => (
    <Suspense fallback={options.suspenseFallback || <div className="suspense-loading">Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

/**
 * Utility function to defer loading of below-the-fold components
 * This significantly reduces Total Blocking Time by deferring non-critical components
 * 
 * @param {Function} importFunc - The import function for the component
 * @param {Object} options - Additional options for dynamic import
 * @returns {React.Component} - The dynamically loaded component
 */
export function deferBelowFold(importFunc, options = {}) {
  return lazyLoad(importFunc, { 
    ssr: false, 
    loading: () => <div className="deferred-loading" style={{ minHeight: options.minHeight || '200px' }}></div>,
    ...options 
  });
}