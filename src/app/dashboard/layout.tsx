// src/app/dashboard/layout.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  // cookies() now returns a Promise<ReadonlyRequestCookies>
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth")?.value;

  if (auth !== "1") {
    // not logged in → send back to PIN page
    redirect("/");
  }

  // valid PIN cookie → render dashboard
  return <>{children}</>;
}
