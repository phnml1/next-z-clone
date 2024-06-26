import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import { getPostRecommends } from "./_lib/getPostRecommends";
import PostRecommends from '@/app/(afterLogin)/home/_component/PostRecommends'
import TabDecider from "./_component/TabDecider";
import TabDeciderSuspense from "./_component/TabDeciderSuspense";
import { Suspense } from "react";
import Loading from "./loading";
// 서버 컴포넌트이기 때문에 이 함수는 서버에서 실행된다.

// src\app\(afterLogin)\home\page.tsx
export default async function Home() {
  return (
    <main className={style.main}>
    
        <TabProvider>
          <Tab />
          <PostForm />
          <Suspense fallback = {<Loading/>}>
          <TabDeciderSuspense />
          </Suspense>
        </TabProvider>
    </main>
  );
}

// Hydrate
// Server Side에서 렌더링된 정적 페이지와 번들링된 js 코드를 클라이언트에게 보낸 후, js 코드가 HTML DOM 위에서 다시 렌더링 되면서 서로 매칭되는 과정이다.