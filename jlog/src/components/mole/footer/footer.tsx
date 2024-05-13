import React from 'react';
import Box from '@/components/atom/box/box';
import Typo from '@/components/atom/typo/typo';
import { container } from './footer.css';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({

}) => {
    return (
        <div className={container}>
            <Box justifyContent='spaceBetween' margin='auto' padding='auto'>
                <Typo size='p1' margin='auto' padding='auto' href='/'>© Jlog, Built with NextJS and Vanilla-Extract</Typo>
            </Box>
        </div>
    );
};

export default Footer;