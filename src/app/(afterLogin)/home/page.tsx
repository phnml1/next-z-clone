import style from './home.module.css';
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import {auth} from "@/auth";
import {Metadata} from "next";
import {Suspense} from "react";
import TabDeciderSuspense from "@/app/(afterLogin)/home/_component/TabDeciderSuspense";
import Loading from "@/app/(afterLogin)/home/loading";

export const metadata: Metadata = {
  title: '홈 / Z',
  description: '홈',
}

export default async function Home() {
  const session = await auth();
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab/>
        <PostForm me={session}/>
        <Suspense fallback={<Loading/>}>
          <TabDeciderSuspense/>
        </Suspense>
      </TabProvider>
    </main>
  )
}

// Hydrate
// Server Side에서 렌더링된 정적 페이지와 번들링된 js 코드를 클라이언트에게 보낸 후, js 코드가 HTML DOM 위에서 다시 렌더링 되면서 서로 매칭되는 과정이다.