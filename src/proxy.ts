import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { userService } from './components/service/user.route'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const users = await userService.getusers();
    if(!users){
        
    }
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: ['/dashboards'],
}