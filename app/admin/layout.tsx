import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-muted/40 border-r md:min-h-screen p-6">
        <div className="mb-8">
            <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="flex flex-col gap-3">
          <Button variant="default" asChild className="justify-start mx-0 my-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/">Back to Website</Link>
            </Button>
            <Button variant="default" asChild className="justify-start mx-0 my-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/admin">Dashboard</Link>
            </Button>
            <Button variant="default" asChild className="justify-start mx-0 my-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/admin/leadership">Leadership Team</Link>
            </Button>
            <Button variant="default" asChild className="justify-start mx-0 my-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/admin/gallery">Upload Image</Link>
            </Button>
            <Button variant="default" asChild className="justify-start mx-0 my-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/admin/content">Content Management</Link>
            </Button>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  )
}
