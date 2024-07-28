import style from './message.module.css';
import Room from "./_component/Room";
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: '쪽지 / Z',
  description: '탐색해보세요.',
}

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room/>
      <Room/>
      <Room/>
      <Room/>
      <Room/>
      <Room/>
    </main>
  )
}