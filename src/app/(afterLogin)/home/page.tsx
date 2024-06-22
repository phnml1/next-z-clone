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
// 서버 컴포넌트이기 때문에 이 함수는 서버에서 실행된다.


export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });
  const dehydratedstate = dehydrate(queryClient);

  return (
    <main className={style.main}>
      {/* 4버전에서는 hydrate였지만 5버전에서는 Hyderation Boundary로 변경됨. */}
      <HydrationBoundary state={dehydratedstate}>
        <TabProvider>
          <Tab />
          <PostForm />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}

// Hydrate
// Server Side에서 렌더링된 정적 페이지와 번들링된 js 코드를 클라이언트에게 보낸 후, js 코드가 HTML DOM 위에서 다시 렌더링 되면서 서로 매칭되는 과정이다.