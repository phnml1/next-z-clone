// src\app\(beforeLogin)\_lib\signup.ts
"use server";

import { redirect } from "next/navigation";

export default async function onSubmit(prevState:any, formData: FormData) {
  console.log(formData);
  // formData 검증
  // formData 검증 - 입력을 안했을 때 || 빈 칸만 입력하는 경우
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  let shouldRedirect = false;

  try {
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include", // 이 속성이 있어야 쿠키 전달 가능
      }
    );
    console.log(response.status);

    // 중복 사용자 체크
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    shouldRedirect = false;
    return { message: null };
  }

  if (shouldRedirect) {
    redirect("/home");
  }
}