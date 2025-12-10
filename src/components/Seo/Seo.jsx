// // import { Helmet } from "react-helmet";
// import Head from "next/head";

// const Seo = ({ title, description, keywords = "", schema, canonicalUrl }) => {
//   console.log(schema,"schema")
//   const cleanAndSplitSchemas = (schemaStr) => {
//     if (!schemaStr) return [];

//     // Remove all outer <script> tags
//     const scriptRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
//     const extracted = [];

//     let match;
//     while ((match = scriptRegex.exec(schemaStr))) {
//       extracted.push(match[1].trim());
//     }

//     // If no <script> tags, treat the whole input as raw JSON or multiple JSON objects
//     if (extracted.length === 0) {
//       try {
//         // Try parsing as a single JSON
//         JSON.parse(schemaStr);
//         extracted.push(schemaStr.trim());
//       } catch {
//         // If multiple JSONs are provided without scripts, split safely
//         const possibleSchemas = schemaStr
//           .split(/\n(?=\s*{)/) // split by new line before a JSON object
//           .map((s) => s.trim())
//           .filter(Boolean);

//         extracted.push(...possibleSchemas);
//       }
//     }

//     return extracted;
//   };

//   const schemaBlocks = cleanAndSplitSchemas(schema);

//   // Safe keywords string for meta tag
//   const keywordsContent = Array.isArray(keywords)
//     ? keywords.join(", ")
//     : typeof keywords === "string"
//     ? keywords
//     : "";

//   return (
//     <Head>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={keywordsContent} />
//       {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
//       {(Array.isArray(schemaBlocks) ? schemaBlocks : []).map((block, idx) => (
//         <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: block }} />
//       ))}
//     </Head>
//   );
// };

// export default Seo;





"use client"

import Script from "next/script"

const Seo = ({ title, description, keywords = "", schema, canonicalUrl }) => {
  const cleanAndParseSchemas = (schemaStr) => {
    if (!schemaStr) return [];

    const schemas = [];
      // console.log(schema,"schema")

    
    // Remove outer <script> tags and extract JSON content
    const scriptRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let match;
    
    while ((match = scriptRegex.exec(schemaStr))) {
      const jsonContent = match[1].trim();
      try {
        // Validate that it's proper JSON
        JSON.parse(jsonContent);
        schemas.push(jsonContent);
      } catch (e) {
        console.error("Invalid JSON-LD schema:", e);
      }
    }

    // If no script tags found, try to parse the raw string
    if (schemas.length === 0 && schemaStr.trim()) {
      try {
        // Try parsing as single JSON object
        JSON.parse(schemaStr);
        schemas.push(schemaStr.trim());
      } catch {
        // Try splitting by newlines for multiple JSON objects
        const lines = schemaStr.split(/\n(?=\s*{)/);
        lines.forEach((line) => {
          const trimmed = line.trim();
          if (trimmed) {
            try {
              JSON.parse(trimmed);
              schemas.push(trimmed);
            } catch (e) {
              // Skip invalid JSON
            }
          }
        });
      }
    }

    return schemas;
  };

  const schemaBlocks = cleanAndParseSchemas(schema);

  // Safe keywords string for meta tag
  const keywordsContent = Array.isArray(keywords)
    ? keywords.join(", ")
    : typeof keywords === "string"
    ? keywords
    : "";

  return (
    <>
      {/* Use dangerouslySetInnerHTML for meta tags in the document head via a custom approach */}
      {typeof document !== "undefined" && (
        <>
          {/* Set title */}
          {title && (() => {
            if (document.title !== title) {
              document.title = title;
            }
            return null;
          })()}
          
          {/* Set meta tags */}
          {description && (() => {
            let meta = document.querySelector('meta[name="description"]');
            if (!meta) {
              meta = document.createElement('meta');
              meta.name = 'description';
              document.head.appendChild(meta);
            }
            if (meta.content !== description) {
              meta.content = description;
            }
            return null;
          })()}
          
          {keywordsContent && (() => {
            let meta = document.querySelector('meta[name="keywords"]');
            if (!meta) {
              meta = document.createElement('meta');
              meta.name = 'keywords';
              document.head.appendChild(meta);
            }
            if (meta.content !== keywordsContent) {
              meta.content = keywordsContent;
            }
            return null;
          })()}
          
          {canonicalUrl && (() => {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
              link = document.createElement('link');
              link.rel = 'canonical';
              document.head.appendChild(link);
            }
            if (link.href !== canonicalUrl) {
              link.href = canonicalUrl;
            }
            return null;
          })()}
        </>
      )}
      
      {/* Schema scripts */}
      {schemaBlocks.map((block, idx) => (
        <Script
          key={`schema-${idx}`}
          id={`schema-${idx}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: block }}
        />
      ))}
    </>
  );
};

export default Seo;
