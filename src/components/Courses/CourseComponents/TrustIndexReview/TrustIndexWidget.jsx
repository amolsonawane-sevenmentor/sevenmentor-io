"use client"

import { useEffect, useRef, useCallback } from "react"

const TrustIndexWidget = ({ onLoad }) => {
  const trustindexRef = useRef(null)
  const scriptLoadedRef = useRef(false)

  const loadTrustIndexScript = useCallback(() => {
    if (scriptLoadedRef.current) return

    const script = document.createElement("script")
    script.src = "https://cdn.trustindex.io/loader.js?753fc0a39c12031b46766b5204c"
    script.async = true
    script.defer = true

    // Add onload handler to notify parent when script is loaded
    script.onload = () => {
      if (onLoad) {
        // Give a small delay to allow the widget to render
        setTimeout(onLoad, 1000)
      }
    }

    if (trustindexRef.current) {
      trustindexRef.current.appendChild(script)
    }

    scriptLoadedRef.current = true

    return () => {
      if (trustindexRef.current && trustindexRef.current.contains(script)) {
        trustindexRef.current.removeChild(script)
      }
    }
  }, [onLoad])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadTrustIndexScript()
        observer.disconnect()
      }
    })

    if (trustindexRef.current) {
      observer.observe(trustindexRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [loadTrustIndexScript])

  return <div ref={trustindexRef} className="trustindex-widget" data-id="753fc0a39c12031b46766b5204c"></div>
}

export default TrustIndexWidget
