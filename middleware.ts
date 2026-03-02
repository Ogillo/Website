import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verify } from "./lib/auth/session"
import { createClient } from "@supabase/supabase-js"

export async function middleware(req: NextRequest) {
  const url = req.nextUrl
  
  // Allow access to admin login page without authentication
  if (url.pathname === "/admin/login") {
    return NextResponse.next()
  }

  if (url.pathname.startsWith("/admin")) {
    // Check for Supabase session via cookies
    const sbAccessToken = req.cookies.get("sb-access-token")?.value
    const sbRefreshToken = req.cookies.get("sb-refresh-token")?.value

    if (!sbAccessToken) {
      // Fall back to old admin_session check for backwards compatibility
      const cookie = req.cookies.get("admin_session")?.value || ""
      const data = await verify(cookie)
      if (!data || data.role !== "admin") {
        const loginUrl = new URL("/admin/login", req.url)
        loginUrl.searchParams.set("next", url.pathname)
        return NextResponse.redirect(loginUrl)
      }
    }
    // If Supabase token exists, allow access (Supabase will validate the token)
    // User role is validated on the login page
  }
  
  return NextResponse.next()
}

export const config = { matcher: ["/admin/:path*"] }
