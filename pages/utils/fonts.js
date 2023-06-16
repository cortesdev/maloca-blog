import { Inter, Orbitron } from 'next/font/google';
import localFont from 'next/font/local';
// import font from '../../public/fonts/maloca.woff2'

export const maloca = localFont({ src: '../../public/fonts/maloca.woff2' });
export const inter = Inter({ subsets: ['latin'] })
export const orbitron = Orbitron({ subsets: ['latin'] })
