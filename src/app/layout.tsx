
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"
import "./globals.scss";
import ClientCachStrategi from '../../components/sw_client_strategi/sw_strategi.js';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NazDev",
  description: "Стань лучшим разработчиком!",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
         <link rel="manifest" href="/manifest.json"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
         <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

        {/* TODO */}
          {/* Google Analytics script */}

          <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ClientCachStrategi/>
        {children}
       {/*  <p className="text-center text-[#fff] pb-30 text-2xl tracking-[2px] font-semibold">NazDev corporation</p> */}
      </body>
    </html>
  );
}
