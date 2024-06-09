"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login');
  return (
    <Main/>
  );
}
  // 인터셉트 라우팅은 클라이언트 컴포넌트에서 Link를 통해 라우팅할 경우에만 적용된다.
// ✔️ router.push
// 브라우저 기록 스택에 리다이렉트 되는 URL이 추가된다.
// 즉 리다이렉트 후, 뒤로가기를 했을 때 리다이렉트 되기 전 주소로 이동된다.
// ✔️ router.replace
// 브라우저 기록 스택의 현재 URL을 대체한다.
// 즉 리다이렉트 후, 뒤로가기를 했을 때 진입한 경로보다 한 단계 이전 주소로 이동된다.

// router.push 는 i/flow/login에서 뒤로가기 할 경우 /login으로 이동된다.
// router.replace 는 localhost:3000 으로 이동된다.

// router.push의 경우 리다이렉트 되기 전 주소로 이동되기 때문에
// i/flow/login에서 뒤로가기 → /login 진입 → 리다이렉트 되어 뒤로가기를 해도 리다이렉팅이 무한 반복되어 제대로 동작되지 않는다.