import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get("apiKey")?.value !== undefined;
    if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
}


export const config = {
    matcher: ["/invoices/:path*"],
};  
