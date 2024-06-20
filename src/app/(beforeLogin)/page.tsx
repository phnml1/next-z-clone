

import { auth } from "@/auth";
import Main from "./_component/Main";
import { redirect } from "next/navigation";
// @로 src폴더경로 대체가능
export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/home");
    return null;
  }

  return (
   <Main/>
  )
}
