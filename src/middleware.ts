import { type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const tes = req.nextUrl.pathname
    console.log(tes)
}

export const config = {
    matcher: '/'
}