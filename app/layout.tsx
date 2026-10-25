import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Yehia’s Career Path'};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>;}
