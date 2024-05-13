import Box from "@/components/atom/box/box";
import Typo from "@/components/atom/typo/typo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box justifyContent='spaceBetween' padding='large'>
        <Typo size='h1' margin='medium' href='/'>JLOG</Typo>
        <Typo size='p1' margin='medium' href='/'>© Jlog, Built with NextJS and Vanilla-Extract</Typo>
      </Box>
    </main>
  );
}
