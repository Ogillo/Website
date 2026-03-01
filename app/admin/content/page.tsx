"use client"
import { useState } from "react"
import ContentShell from "@/components/admin/Content/ContentShell"
import StoriesTab from "./stories-tab"
import EventsTab from "./events-tab"

export default function ContentManagementPage() {
  const [tab, setTab] = useState<"stories" | "events">("stories")
  return (
    <ContentShell>
      <div className="flex gap-4 border-b mb-4">
        <button className={`px-4 py-2 font-medium transition-colors ${tab === "stories" ? "border-b-2 border-primary text-primary" : "text-gray-600 hover:text-gray-900"}`} onClick={() => setTab("stories")}>Stories</button>
        <button className={`px-4 py-2 font-medium transition-colors ${tab === "events" ? "border-b-2 border-primary text-primary" : "text-gray-600 hover:text-gray-900"}`} onClick={() => setTab("events")}>Events</button>
      </div>
      {tab === "stories" ? <StoriesTab /> : <EventsTab />}
    </ContentShell>
  )
}

