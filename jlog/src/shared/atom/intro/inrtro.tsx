import { Typo } from "@/shared/atom/typo/typo";
import { vars } from "@/shared/styles/globalTheme.css";
import { Box } from "@mui/material";


export default function IntroBox() {
    return (
        <Box marginBottom={'40px'}>
            <Typo size='h1'>
                Blog
            </Typo>
            <Typo size='p1' margin="small" color='gray'>개발하면서 배운 내용을 정리하는 공간입니다.</Typo>
            <Typo size='p1' margin="small" color="gray">자유로운 토론, 의견 공유는 언제나 환영합니다. 🐶</Typo>
        </Box>
    );
}