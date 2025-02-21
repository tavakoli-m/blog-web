import { NextResponse } from "next/server";
import { GetMe } from "./services/AuthService";

export const middleware = async (request) => {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const res = await GetMe(request.cookies.get("auth_token").value).catch(
      (res) => {
        return res.response;
      }
    );
    if (res.status == 401) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
};

export const config = {
  matcher: ["/admin/:path*"],
};
