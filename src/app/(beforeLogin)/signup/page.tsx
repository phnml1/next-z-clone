"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function SignUp() {
  const router = useRouter();
  router.replace('/i/flow/signup');
  return (
    <Main/>
  );
}