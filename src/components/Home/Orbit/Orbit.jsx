"use client"
import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud"

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.02,
  },
}

const renderCustomIcon = (icon, theme) => {
  const colors = [
    // Vibrant and contrasting colors
    "#F97316", // orange
    "#10B981", // green
    "#3B82F6", // blue
    "#EC4899", // pink
    "#F59E0B", // yellow
    "#8B5CF6", // purple
    "#6366F1", // indigo
    "#14B8A6", // teal
    "#EF4444", // red
    "#FF7F50", // coral
    "#FFD700", // gold
    "#40E0D0", // turquoise
    "#7FFF00", // chartreuse
    "#FF69B4", // hot pink
    "#DC143C", // crimson
    "#00BFFF", // deep sky blue
    "#32CD32", // lime green
    "#FF4500", // orange-red
    "#BA55D3", // medium orchid
    "#FFDAB9", // peach puff
    "#ADFF2F", // green yellow
    "#FF6347", // tomato
    "#4682B4", // steel blue
    "#8A2BE2", // blue violet
    "#FF1493", // deep pink
    "#00FA9A", // medium spring green
    "#FFD700", // golden rod
    "#1E90FF", // dodger blue
    "#FF8C00", // dark orange
    "#FF00FF", // magenta
    "#98FB98", // pale green
    "#87CEEB", // sky blue
    "#D2691E", // chocolate
  ]

  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"

  // Use index-based color assignment for consistency
  const iconIndex = Math.abs(icon.slug.charCodeAt(0) % colors.length)
  const fallbackHex = colors[iconIndex] // Assign a unique color per icon
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  })
}

const Orbit = ({ iconSlugs }) => {
  const [data, setData] = useState(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon, theme || null))
  }, [data, theme])

  return (
    <Cloud  suppressHydrationWarning={true} {...cloudProps}>
      <>{renderedIcons}</>

    </Cloud>
  )
}

export default Orbit
