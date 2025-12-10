// import { notFound } from "next/navigation";
// import { careerServerService } from "../../../../services/career-server-service";
// import IndividualCareer from "./IndividualCareer.jsx";

// // Helper function to clean text content and remove control characters
// function sanitizeText(text) {
//   if (!text) return ""

//   try {
//     return text
//       .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove control characters
//       .replace(/\r\n/g, " ") // Replace CRLF with space
//       .replace(/\n/g, " ") // Replace LF with space
//       .replace(/\r/g, " ") // Replace CR with space
//       .replace(/\t/g, " ") // Replace tabs with space
//       .replace(/\s+/g, " ") // Replace multiple spaces with single space
//       .trim()
//   } catch (error) {
//     console.error("Error sanitizing text:", error)
//     return ""
//   }
// }

// // Helper function to strip HTML tags, specifically for JSON-LD scripts
// function stripHtmlTags(htmlString) {
//   if (!htmlString || typeof htmlString !== "string") {
//     return "";
//   }

//   // Use a regular expression to find the content of a <script type="application/ld+json"> tag
//   const match = htmlString.match(
//     /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/
//   );

//   // If a match is found, return the content, otherwise return the original string
//   return match ? match[1] : htmlString;
// }

// // Enhanced function to safely parse JSON with comprehensive error handling
// function safeJSONParse(jsonString) {
//   if (!jsonString || typeof jsonString !== "string") {
//     return null
//   }

//   try {
//     // Remove BOM (Byte Order Mark) if present
//     let cleanedJson = jsonString.replace(/^\uFEFF/, "")

//     // Remove all control characters and problematic whitespace
//     cleanedJson = cleanedJson
//       .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove control characters
//       .replace(/[\u0000-\u001F\u007F-\u009F]/g, "") // Remove additional control characters
//       .trim()

//     // Check if the string is empty after cleaning
//     if (!cleanedJson) {
//       return null
//     }

//     // Check if it looks like JSON (starts with { or [)
//     if (!cleanedJson.startsWith("{") && !cleanedJson.startsWith("[")) {
//       console.warn("JSON string does not start with valid JSON character:", cleanedJson.substring(0, 10))
//       return null
//     }

//     // Try to fix common JSON issues
//     cleanedJson = cleanedJson
//       .replace(/,(\s*[}\]])/g, "$1") // Remove trailing commas
//       .replace(/([{,]\s*)(\w+):/g, '$1"$2":') // Add quotes to unquoted keys
//       .replace(/:\s*'([^']*)'/g, ':"$1"') // Replace single quotes with double quotes
//       .replace(/\r\n/g, "\\n") // Escape CRLF
//       .replace(/\n/g, "\\n") // Escape LF
//       .replace(/\r/g, "\\n") // Escape CR
//       .replace(/\t/g, "\\t") // Escape tabs

//     // Attempt to parse the cleaned JSON
//     return JSON.parse(cleanedJson)
//   } catch (error) {
//     console.error("Error parsing JSON:", error)
//     console.error("Problematic JSON string (first 100 chars):", jsonString?.substring(0, 100))

//     // Last resort: try to extract valid JSON from the string
//     try {
//       const match = jsonString.match(/\{.*\}|\[.*\]/)
//       if (match) {
//         return JSON.parse(match[0])
//       }
//     } catch (lastResortError) {
//       console.error("Last resort JSON parsing also failed:", lastResortError)
//     }

//     return null
//   }
// }

// export async function generateMetadata({ params }) {
//   try {
//     const response = await careerServerService.getCareerBySlug(params.slug)
//     const career = response.data

//     if (!career) {
//       return {
//         title: "Career Not Found",
//         description: "The requested career could not be found.",
//       }
//     }

//     // Extract meta information from the career data
//     const metaInfo = career.meta?.[0] || {}

//     // Safely process the description with control character handling
//     let description = ""
//     if (metaInfo.description) {
//       description = sanitizeText(metaInfo.description)
//     } else if (career.content) {
//       // Remove HTML tags and sanitize the content
//       const cleanContent = career.content.replace(/<[^>]*>/g, "")
//       description = sanitizeText(cleanContent).substring(0, 160)
//     } else {
//       description = `Join our team as ${career.title || "a team member"} in ${career.location || "our office"}`
//     }

//     // Safely parse the schema JSON - this is where the error was occurring
//     let schemaJson = undefined
//     if (career.meta?.[0]?.metaJsSchema) {
//       // First, strip any HTML tags that might be wrapping the JSON
//       const strippedSchema = stripHtmlTags(career.meta[0].metaJsSchema);
      
//       // Now, safely parse the cleaned JSON
//       schemaJson = safeJSONParse(strippedSchema);

//       if (!schemaJson) {
//         console.warn(`Failed to parse metaJsSchema for career: ${career.title}`);
//       }
//     }

//     // Sanitize all text fields that might contain control characters
//     const sanitizedTitle = sanitizeText(career.title) || "Career Opportunity";
//     const sanitizedLocation = sanitizeText(career.location) || "Various Locations"
//     const sanitizedType = sanitizeText(career.type) || "Full-time"
//     const sanitizedWorkMode = sanitizeText(career.workMode) || "Not specified"
//     const sanitizedExperience = sanitizeText(career.experience) || "Not specified"

//     const metadata = {
//       title: `${sanitizedTitle} | ${sanitizedLocation} | SevenMentor Careers`,
//       description: description,
//       keywords: metaInfo.focusKeyword
//         ? [
//             sanitizeText(metaInfo.focusKeyword),
//             sanitizedTitle,
//             sanitizedType,
//             sanitizedLocation,
//             "careers",
//             "jobs",
//             "SevenMentor",
//           ].filter(Boolean)
//         : [sanitizedTitle, sanitizedType, sanitizedLocation, "careers", "jobs", "SevenMentor"].filter(Boolean),
//       openGraph: {
//         title: sanitizedTitle,
//         description: description,
//         type: "website",
//         siteName: "SevenMentor",
//         locale: "en_US",
//       },
//       alternates: {
//         canonical: `https://www.sevenmentor.com/careers/${params.slug}`,
//       },
//       other: {
//         "job-title": sanitizedTitle,
//         "job-location": sanitizedLocation,
//         "job-type": sanitizedType,
//         "work-mode": sanitizedWorkMode,
//         "experience-required": sanitizedExperience,
//       },
//     }

//     // Only add schema if it was successfully parsed
//     if (schemaJson && typeof schemaJson === "object") {
//       metadata.schema = schemaJson
//     }

//     return metadata
//   } catch (error) {
//     console.error("Error generating metadata:", error)
//     return {
//       title: "Career Not Found",
//       description: "The requested career could not be found.",
//     }
//   }
// }

// export async function generateStaticParams() {
//   try {
//     // Fetch all careers to generate static params
//     const response = await careerServerService.getCareers({ limit: 1000 })
//     const careers = response.data || []

//     return careers
//       .filter((career) => career.slug) // Only include careers with valid slugs
//       .map((career) => ({
//         slug: career.slug,
//       }))
//   } catch (error) {
//     console.error("Error generating static params:", error)
//     return []
//   }
// }

// export default async function CareerPage({ params }) {
//   try {
//     const response = await careerServerService.getCareerBySlug(params.slug)
//     const career = response.data

//     if (!career) {
//       notFound()
//     }

//     return <IndividualCareer career={career} />
//   } catch (error) {
//     console.error("Error fetching career:", error)
//     notFound()
//   }
// }


import { notFound } from "next/navigation";
import { careerServerService } from "../../../../services/career-server-service";
import IndividualCareer from "./IndividualCareer.jsx";

// Helper function to clean text content and remove control characters
function sanitizeText(text) {
  if (!text) return "";

  try {
    return text
      .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove control characters
      .replace(/\r\n/g, " ") // Replace CRLF with space
      .replace(/\n/g, " ") // Replace LF with space
      .replace(/\r/g, " ") // Replace CR with space
      .replace(/\t/g, " ") // Replace tabs with space
      .replace(/\s+/g, " ") // Replace multiple spaces with single space
      .trim();
  } catch (error) {
    console.error("Error sanitizing text:", error);
    return "";
  }
}

// Helper function to extract JSON from script tags or HTML
function extractJsonFromHtml(htmlString) {
  if (!htmlString || typeof htmlString !== "string") {
    return null;
  }

  try {
    let content = htmlString.trim();
    
    // Try to extract content from script tag
    const scriptRegex = /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i;
    const match = content.match(scriptRegex);
    
    if (match && match[1]) {
      content = match[1].trim();
    }
    
    // Remove any remaining HTML tags
    content = content.replace(/<[^>]*>/g, "").trim();
    
    // Check if it starts with valid JSON character
    if (!content.startsWith("{") && !content.startsWith("[")) {
      return null;
    }
    
    // Try to parse the JSON
    return JSON.parse(content);
  } catch (error) {
    // Return null if parsing fails
    return null;
  }
}

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;

    const response = await careerServerService.getCareerBySlug(slug);
    const career = response.data;

    if (!career) {
      return {
        title: "Career Not Found",
        description: "The requested career could not be found.",
      };
    }

    // Extract meta information from the career data
    const metaInfo = career.meta?.[0] || {};

    // Safely process the description with control character handling
    let description = "";
    if (metaInfo.description) {
      description = sanitizeText(metaInfo.description);
    } else if (career.content) {
      // Remove HTML tags and sanitize the content
      const cleanContent = career.content.replace(/<[^>]*>/g, "");
      description = sanitizeText(cleanContent).substring(0, 160);
    } else {
      description = `Join our team as ${career.title || "a team member"} in ${career.location || "our office"}`;
    }

    // Sanitize all text fields that might contain control characters
    const sanitizedTitle = sanitizeText(metaInfo.title) || "Career Opportunity";
    const sanitizedLocation = sanitizeText(career.location) || "Various Locations";
    const sanitizedType = sanitizeText(career.type) || "Full-time";
    const sanitizedWorkMode = sanitizeText(career.workMode) || "Not specified";
    const sanitizedExperience = sanitizeText(career.experience) || "Not specified";

    const metadata = {
      title: `${sanitizedTitle} | ${sanitizedLocation} | SevenMentor Careers`,
      description: description,
      keywords: metaInfo.focusKeyword
        ? [
            sanitizeText(metaInfo.focusKeyword),
            sanitizedTitle,
            sanitizedType,
            sanitizedLocation,
            "careers",
            "jobs",
            "SevenMentor",
          ].filter(Boolean)
        : [sanitizedTitle, sanitizedType, sanitizedLocation, "careers", "jobs", "SevenMentor"].filter(Boolean),
      openGraph: {
        title: sanitizedTitle,
        description: description,
        type: "website",
        siteName: "SevenMentor",
        locale: "en_US",
      },
      alternates: {
        canonical: `https://www.sevenmentor.com/careers/${slug}`,
      },
      other: {
        "job-title": sanitizedTitle,
        "job-location": sanitizedLocation,
        "job-type": sanitizedType,
        "work-mode": sanitizedWorkMode,
        "experience-required": sanitizedExperience,
      },
    };

    return metadata;
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Career Not Found",
      description: "The requested career could not be found.",
    };
  }
}

export async function generateStaticParams() {
  try {
    // Fetch all careers to generate static params
    const response = await careerServerService.getCareers({ limit: 1000 });
    const careers = response.data || [];

    return careers
      .filter((career) => career.slug) // Only include careers with valid slugs
      .map((career) => ({
        slug: career.slug,
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function CareerPage({ params }) {
  const { slug } = await params;

  const response = await careerServerService.getCareerBySlug(slug);
  const career = response.data;

  console.log("Fetched career data for slug:", response.data);

  if (!career) {
    notFound();
  }

  // Safely parse the schema JSON from career.meta
  let schemaJson = null;
  if (career.meta?.[0]?.metaJsSchema) {
    schemaJson = extractJsonFromHtml(career.meta[0].metaJsSchema);
  }

  return (
    <>
      {/* Add JSON-LD schema script - this will be automatically placed in <head> by React */}
      {schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      )}
      <IndividualCareer career={career} slug={career.slug} />
    </>
  );
}
