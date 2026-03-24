import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './services/auth.service';

export async function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Assume /dashboard is a protected route
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const decoded = await verifyToken(token);
      if (!decoded) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
      // You can add more checks here based on the decoded token payload (e.g., roles)
    } catch (error) {
      console.error('Middleware token verification error:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
