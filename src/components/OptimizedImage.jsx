'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage component with aggressive lazy loading and optimization
 * This significantly reduces Total Blocking Time by deferring image loading
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Use intersection observer for lazy loading
  useEffect(() => {
    if (!priority && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '200px' } // Start loading when image is 200px from viewport
      );

      observer.observe(imgRef.current);
      return () => observer.disconnect();
    } else {
      setIsInView(true); // Priority images load immediately
    }
  }, [priority]);

  // Generate placeholder color or use blur data URL
  const placeholder = '#f0f0f0';

  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={`image-container ${className || ''}`}
      style={{
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        backgroundColor: placeholder,
        overflow: 'hidden',
      }}
    >
      {(isInView || priority) && (
        <img
          src={src}
          alt={alt || ''}
          width={width}
          height={height}
          onLoad={handleLoad}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          {...props}
        />
      )}
    </div>
  );
}