import Box from "@/components/box/box";
import Typo from "@/components/typo/typo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box justifyContent='spaceBetween' padding='large'>
        <div>
          <Typo size='h2' color='origin'>hello world</Typo>
          <Typo size='p1'>안녕하세요 폰트 확인용 글 작성 입니다.</Typo>
          <Typo size='p2'>안녕하세요 폰트 확인용 글 작성 입니다.</Typo>
        </div>
        <Typo size='h1'>폰트 확인</Typo>
        <a href="/about">About</a>
      </Box>
    </main>
  );
}
