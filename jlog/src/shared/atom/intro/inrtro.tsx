import { Typo } from "@/shared/atom/typo/typo";
import { Box } from "@mui/material";
import Link from "next/link";
import { linkStyle } from "./intro.css";


export default function IntroBox() {
    return (
        <Box marginBottom={'40px'}>
            <Typo size='h1' margin="medium">
                Blog
            </Typo>
            <Typo size='p1' margin="small" color='gray'>개발하면서 배운 내용을 정리하는 공간입니다.</Typo>
            <Typo size='p1' margin="small" color="gray">자유로운 토론, 의견 공유는 언제나 환영합니다. 🐶</Typo>
            <Link href="https://habitual-suggestion-887.notion.site/107121b8fe0e8096a743c3f113b1ac6a" className={linkStyle}>
                More Information About Me ➔
            </Link>
        </Box>
    );
}