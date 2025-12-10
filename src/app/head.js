export default function Head() {
  return (
    <>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://sevenmentor.com" />

      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="https://sevenmentor.com/_next/static/media/e4af272ccee01ff0-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="preload" href="/_next/static/css/931b179cff3131dc.css" as="style" />
      <link rel="preload" href="/_next/static/css/326939a8b5301299.css" as="style" />

      {/* Preload critical JavaScript chunks */}
      <link rel="preload" href="/_next/static/chunks/main-app-32c54b3f83d75e80.js" as="script" />
      <link rel="preload" href="/_next/static/chunks/webpack-8f61d887a7d4e26f.js" as="script" />

      {/* Preload above-the-fold images */}
      <link rel="preload" href="/hero-image.webp" as="image" type="image/webp" />

      {/* Favicon and viewport */}
      <link rel="icon" href="/favicon.webp" type="image/webp" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* DNS prefetch for external domains */}

     
      {/* <link rel="dns-prefetch" href="https://d23pnupcaqcigq.cloudfront.net" /> */}
            <link rel="dns-prefetch" href=" https://sevenmentor-website.s3.eu-north-1.amazonaws.com" />

      <link rel="dns-prefetch" href="https://flagcdn.com" />
      <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0130/8160.js" async="async"></script>

    </>
  )
}
