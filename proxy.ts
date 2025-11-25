// /proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const { pathname } = request.nextUrl;

    // --- 1. User BELUM login → paksa ke /auth/login ---
    const protectedRoutes = ["/dashboard", "/profile"];

    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    // --- 2. User SUDAH login → larang masuk halaman auth ---
    const authRoutes = ["/auth/login", "/auth/register", "/auth/reset", "/auth/forgot"];

    const isAuthPage = authRoutes.some((route) =>
        pathname.startsWith(route)
    );

    if (isAuthPage && token) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // jika semua aman → lanjut
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/profile/:path*",
        "/auth/:path*",   // tambahkan baris ini agar halaman auth ikut diawasi
    ],
};
