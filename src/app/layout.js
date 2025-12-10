// import Script from 'next/script';

// export const metadata = {
//   title: 'SevenMentor',
//   description: 'SevenMentor Training Institute',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Preload critical fonts */}
//         <link
//           rel="preload"
//           href="/fonts/main-font.woff2"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
        
//         {/* Inline critical CSS */}
//         <style dangerouslySetInnerHTML={{ __html: `
//           /* Critical CSS for above-the-fold content */
//           body {
//             display: block;
//             margin: 0;
//             padding: 0;
//             font-family: sans-serif;
//           }
          
//           /* Prevent layout shifts */
//           img, video {
//             max-width: 100%;
//             height: auto;
//           }
          
//           /* Hide content until CSS is loaded */
//           .js .fouc {
//             visibility: hidden;
//           }
          
//           /* Optimize rendering */
//           * {
//             box-sizing: border-box;
//             -webkit-font-smoothing: antialiased;
//           }
//         `}} />
//       </head>
//       <body>
//         <script dangerouslySetInnerHTML={{ __html: `
//           // Prevent Flash of Unstyled Content
//           document.documentElement.classList.add('js');
          
//           // Optimize resource loading
//           const observer = new PerformanceObserver((list) => {
//             list.getEntries().forEach((entry) => {
//               // Report long tasks to analytics
//               if (entry.entryType === 'longtask' && entry.duration > 50) {
//                 // You can log these to your analytics
//                 console.log('Long task detected:', entry.duration);
//               }
//             });
//           });
          
//           // Start observing long tasks
//           observer.observe({entryTypes: ['longtask']});
          
//           // Defer non-critical resources
//           const deferResource = (url, type) => {
//             const link = document.createElement(type === 'style' ? 'link' : 'script');
//             if (type === 'style') {
//               link.rel = 'stylesheet';
//               link.href = url;
//             } else {
//               link.src = url;
//               link.async = true;
//             }
//             document.head.appendChild(link);
//           };
          
//           // Queue resources to load after page is interactive
//           window.addEventListener('load', () => {
//             // Remove FOUC prevention after styles are loaded
//             document.documentElement.classList.remove('js');
            
//             // Load non-critical CSS
//             setTimeout(() => {
//               // Add your non-critical CSS files here
//               // deferResource('/path/to/non-critical.css', 'style');
//             }, 100);
//           });
//         `}} />
        
//         <div className="fouc">
//           {children}
//         </div>
        
//         {/* Load analytics scripts with lowest priority */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js"
//           strategy="afterInteractive"
//           onLoad={() => {
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'YOUR-ID');
//           }}
//         />
       
//         <Script id="quora-pixel" strategy="afterInteractive">
//           {`
//             !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
//             qp('init', '43d681d1a96449ca8d7e3a68499976a4');
//             qp('track', 'ViewContent');
//           `}
//         </Script>
//         <noscript>
//           <img
//             height="1"
//             width="1"
//             style={{ display: 'none' }}
//             src="https://q.quora.com/_/ad/43d681d1a96449ca8d7e3a68499976a4/pixel?tag=ViewContent&noscript=1"
//             alt="Quora Pixel"
//           />
//         </noscript>

//       </body>
//     </html>
//   );
// }