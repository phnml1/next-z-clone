export async function getPostRecommends() {
  const res = await fetch("http://localhost:9090/api/postRecommends", {
    next: {
      tags: ["posts", "recommends"], // 서버에서 가져온 데이터에 tag를 설정, 이후 캐시 초기화 등에 사용됨
    },
		cache: 'no-store' // cache를 하지 않음 (아니면 일정 기간 동안 새로운데이터 없이 기존데이터)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}