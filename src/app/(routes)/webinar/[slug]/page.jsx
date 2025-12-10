"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { EventDetail } from "../../../../components/Event_Page/EventDetail"
import { eventsData } from "../../../../components/Event_Page/EventsData"
import Link from "next/link"

export default function EventDetailPage() {
  const params = useParams()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.slug) {
      // Find the event by slug
      const foundEvent = eventsData.find((e) => e.slug === params.slug)
      setEvent(foundEvent || null)
      setLoading(false)
    }
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Webinar Not Found</h1>
        <p className="text-gray-300 mb-6">`The Webinar you&apos;re looking for doesn&apos;t exist or has been removed.`</p>
        <Link href="/Webinar" className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition">
          Back to Webinar
        </Link>
      </div>
    )
  }

  return <EventDetail event={event} />
}
