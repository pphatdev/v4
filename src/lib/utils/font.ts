import { Poppins } from "next/font/google";


export const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    preload: true,
});

// export const kantumruyPro = Kantumruy_Pro({
//     variable: "--font-kantumruy",
//     weight: ["400", "500", "600", "700"],
//     subsets: ["latin"],
//     display: "swap",
//     preload: true,
// });

// export const openSans = Open_Sans({
//     variable: "--font-open-sans",
//     weight: ["400", "500", "600", "700", "800"],
//     subsets: ["latin"],
//     display: "swap",
//     preload: true,
// });