import Box from "@/components/box/box";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box justifyContent='spaceBetween' padding='large'>
        <div>
          hello world
          안녕하세요 폰트 확인용 글 작성 입니다.
        </div>
        <h1>폰트 확인</h1>
        <a href="/about">About</a>
      </Box>
    </main>
  );
}
