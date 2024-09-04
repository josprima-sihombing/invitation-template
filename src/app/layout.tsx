import Script from "next/script";

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      {children}

      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-6H41XH8NB2"
            strategy="afterInteractive"
          />
          <Script id="gtag">
            {`
              window.dataLayer = window.dataLayer || [];

              function gtag(){dataLayer.push(arguments);}

              gtag('js', new Date());
              gtag('config', 'G-6H41XH8NB2');
            `}
          </Script>
        </>
      )}
    </>
  );
}
