"use client"
import { useState } from "react"
import GalleryShell from "@/components/admin/Gallery/GalleryShell"
import HeroTab from "./hero-tab"
import GalleryTab from "./gallery-tab"

export default function GalleryManagementPage() {
  const [tab, setTab] = useState<"hero" | "gallery">("hero")
  return (
    <GalleryShell>
      <div className="flex gap-4 border-b mb-4">
        <button className={`px-4 py-2 font-medium transition-colors ${tab === "hero" ? "border-b-2 border-primary text-primary" : "text-gray-600 hover:text-gray-900"}`} onClick={() => setTab("hero")}>Hero Images</button>
        <button className={`px-4 py-2 font-medium transition-colors ${tab === "gallery" ? "border-b-2 border-primary text-primary" : "text-gray-600 hover:text-gray-900"}`} onClick={() => setTab("gallery")}>Gallery Images</button>
      </div>
      {tab === "hero" ? <HeroTab /> : <GalleryTab />}
    </GalleryShell>
  )
}

