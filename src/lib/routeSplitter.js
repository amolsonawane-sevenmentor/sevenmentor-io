'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Prefetch routes based on user navigation patterns
 * This reduces Total Blocking Time by loading routes before they're needed
 */
export function usePrefetchRoutes(routes = []) {
  const router = useRouter();
  
  useEffect(() => {
    // Prefetch specified routes
    routes.forEach(route => {
      router.prefetch(route);
    });
  }, [router, routes]);
}

/**
 * Dynamically load components based on route
 * This reduces initial JavaScript payload
 */
export function useRouteBasedLoading() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Immediately load current route's JS
    const loadCurrentRouteJS = async () => {
      try {
        // Dynamic import based on current route
        if (pathname.startsWith('/courses')) {
          await import('../components/Courses/CoursePage');
        } else if (pathname.startsWith('/blogs')) {
          await import('../components/Blogs/BlogPage');
        } else if (pathname.startsWith('/about')) {
          await import('../components/AboutUs/About');
        }
        // Add more route-specific imports as needed
      } catch (error) {
        console.error('Failed to preload route components:', error);
      }
    };
    
    loadCurrentRouteJS();
  }, [pathname]);
}

/**
 * Optimize route transitions by preloading components
 * This reduces perceived loading time between routes
 */
export function useOptimizedRouteTransition() {
  const router = useRouter();
  
  useEffect(() => {
    // Preload components on mouse hover over links
    const handleLinkHover = (event) => {
      const link = event.target.closest('a');
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        const path = new URL(link.href).pathname;
        router.prefetch(path);
      }
    };
    
    // Add event listeners
    document.addEventListener('mouseover', handleLinkHover);
    
    return () => {
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, [router]);
}