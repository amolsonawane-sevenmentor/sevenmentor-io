import dynamic from "next/dynamic";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

// ...existing code...

// Dynamic import for ResponsiveNavbar
// const ResponsiveNavbar = dynamic(
//   () => import("../components/Navbar/ResponsiveNavbar.jsx"),
//   {
//     loading: () => <div className="h-16 bg-black animate-pulse" />,
//     ssr: true,
//   }
// );

// Dynamic import for Footer
// const Footer = dynamic(() => import("../components/Footer/Footer.jsx"), {
//   loading: () => <div className="h-32 bg-gray-100 animate-pulse" />,
//   ssr: true,
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SevenMentor",
  description:
    "Welcome to SevenMentor – Explore our top-rated courses and training programs.",
  keywords: [
    "SevenMentor",
    "training",
    "courses",
    "IT training",
    "certification",
  ],
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">



 <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/main-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical CSS for above-the-fold content */
          body {
            display: block;
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
          
          /* Prevent layout shifts */
          img, video {
            max-width: 100%;
            height: auto;
          }
          
          /* Hide content until CSS is loaded */
          .js .fouc {
            visibility: hidden;
          }
          
          /* Optimize rendering */
          * {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
          }
        `}} />
      </head>



      <body className={inter.className}>
        {/* preconnect */}
        <link rel="preconnect" href="https://sevenmentor-website.s3.eu-north-1.amazonaws.com" />

        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TCFBRGGJ');
          `}
        </Script>

        {/* google recaptcha */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1307287640343560&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TCFBRGGJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* <ResponsiveNavbar /> */}
        <main className="">{children}</main>
        {/* <Footer /> */}

        {/* Google Ads gtag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17558994785"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());

            gtag('config', 'AW-17558994785');
          `}
        </Script>

        {/* Tawk.to Live Chat Widget (bottom-left) */}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JYC1QGM6MP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-JYC1QGM6MP');
          `}
        </Script>

        <Script id="whatsapp-event" strategy="afterInteractive">
          {`
            gtag('event', 'Whats_app_clicks', {
              // event parameters
            });
          `}
        </Script>

        <Script id="conversion-event" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-958160426/yn2SCPOy874aEKq88cgD',
              'value': 300.0,
              'currency': 'INR'
            });
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1307287640343560');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Facebook Pixel noscript fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1307287640343560&ev=PageView&noscript=1" />`,
          }}
        />

        {/* Meta Pixel Code - Additional Pixel */}
        <Script id="meta-pixel-additional" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1759534458063693');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Meta Pixel noscript fallback - Additional Pixel */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1759534458063693&ev=PageView&noscript=1" />`,
          }}
        />

        {/* Crazy Egg Script */}
        <Script
          id="crazy-egg-script"
          src="//script.crazyegg.com/pages/scripts/0130/8160.js"
          strategy="afterInteractive"
        />








  <script dangerouslySetInnerHTML={{ __html: `
          // Prevent Flash of Unstyled Content
          document.documentElement.classList.add('js');
          
          // Optimize resource loading
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              // Report long tasks to analytics
              if (entry.entryType === 'longtask' && entry.duration > 50) {
                // You can log these to your analytics
                console.log('Long task detected:', entry.duration);
              }
            });
          });
          
          // Start observing long tasks
          observer.observe({entryTypes: ['longtask']});
          
          // Defer non-critical resources
          const deferResource = (url, type) => {
            const link = document.createElement(type === 'style' ? 'link' : 'script');
            if (type === 'style') {
              link.rel = 'stylesheet';
              link.href = url;
            } else {
              link.src = url;
              link.async = true;
            }
            document.head.appendChild(link);
          };
          
          // Queue resources to load after page is interactive
          window.addEventListener('load', () => {
            // Remove FOUC prevention after styles are loaded
            document.documentElement.classList.remove('js');
            
            // Load non-critical CSS
            setTimeout(() => {
              // Add your non-critical CSS files here
              // deferResource('/path/to/non-critical.css', 'style');
            }, 100);
          });
        `}} />
















          {/* Load analytics scripts with lowest priority */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js"
          strategy="afterInteractive"
          onLoad={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR-ID');
          }}
        /> */}
       
        <Script id="quora-pixel" strategy="afterInteractive">
          {`
            !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
            qp('init', '43d681d1a96449ca8d7e3a68499976a4');
            qp('track', 'ViewContent');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://q.quora.com/_/ad/43d681d1a96449ca8d7e3a68499976a4/pixel?tag=ViewContent&noscript=1"
            alt="Quora Pixel"
          />
        </noscript>
      </body>
    </html>
  );
}
