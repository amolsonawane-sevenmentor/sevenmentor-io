"use client"
import dynamic from "next/dynamic"
import OrbitContent from "./OrbitContent.jsx"

// Use dynamic import with ssr: false to prevent hydration mismatch
const Orbit = dynamic(() => import("./Orbit"), {
  ssr: false,
  loading: () => <div className="text-orange-500 font-medium text-lg">Loading Orbit...</div>,
})

export default function OrbitWrapper({ mailId, bannerTitle, contactNo }) {
  const iconSlugs = [
    // Existing icons
    "html5",
    "css3",
    "typescript",
    "react",
    "svelte",
    "tailwindcss",
    "bootstrap",
    "sass",
    "less",
    "webpack",
    "vite",
    "javascript",
    "nestjs",
    "graphql",
    "python",
    "django",
    "php",
    "laravel",
    "ruby",
    "rubyonrails",
    "kotlin",
    "mysql",
    "postgresql",
    "mongodb",
    "sqlite",
    "firebase",
    "redis",
    "docker",
    "kubernetes",
    "googlecloud",
    "git",
    "gitlab",
    "bitbucket",
    "figma",
    "postman",
    "heroku",
    "netlify",
    "eslint",

    // Newly added icons
    "terraform", // DevOps tool
    "swagger", // API documentation
    "insomnia", // API testing tool
    "digitalocean", // Hosting service
    "prettier", // Code formatter
    "c", // Programming language
    "go", // Programming language
    "swift", // Programming language
    "androidstudio", // Code editor
    "canva", // Design tool
    "ionic", // Mobile app framework
    "capacitor", // Cross-platform runtime
    "redux", // State management library
    "mobx", // State management library
    "prisma", // ORM for databases
    "antdesign", // UI library
    "storybook", // UI component explorer
    "jest", // Testing framework
    "mocha", // Testing framework
    "cypress", // End-to-end testing
    "selenium", // Browser automation
    "electron", // Desktop app framework
    "puppeteer", // Browser automation library
    "neo4j", // Graph database
    "elastic", // Search engine
    "rabbitmq", // Message broker
    "nginx", // Web server
    "apache", // Web server
    "jenkins", // CI/CD tool
    "subversion", // Version control
    "datadog", // Monitoring tool
    "newrelic", // Application monitoring
    "grafana", // Monitoring and observability
    "prometheus", // Monitoring tool
  ]

  return (
    <div className="bg-black min-h-screen lg:pl-12 grid grid-cols-1 md:grid-cols-2  items-center bg-gradient-to-b from-black to-orange-500/20  lg:bg-gradient-to-r ">
      {/* Left Section */}
      <div className="flex justify-center items-center p-4 md:p-10">
        <OrbitContent mailId={mailId} bannerTitle={bannerTitle} contactNo={contactNo} />
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center p-4 mt-[-50px] md:mt-0  md:p-10 overflow-hidden  ">
        <Orbit iconSlugs={iconSlugs} />
      </div>
    </div>
  )
}
