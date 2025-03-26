import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pavan",
  description: "About me page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add a favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Modern Scrollbar CSS */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.6/simplebar.min.css"
          rel="stylesheet"
          integrity="sha512-HY+ErQc1YaqAUbXHXr5CxXaLsLSOSyGCTTQoHKHAFSmgl3Q9QKhVpM+SH3RW5NOz+SthvpeMnEKeJ+IXV+Hp4g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900 font-sans`}
        data-simplebar // Apply the SimpleBar functionality
      >
        {/* Main Content */}
        <main>{children}</main>

        {/* Smooth Scrollbar Scripts */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.8.4/smooth-scrollbar.min.js"
          integrity="sha512-UOuvdHxPTS8D5IoOYOwLGAN05jYYXKhxFOZDe/24o53eOOf9ylws0uPfV+gRj/k1z17C0KtC7Vkt+5H7BLQxOA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.8.4/plugins/overscroll.min.js"
          integrity="sha512-r0mvJ5yIFzuQ9ExHaNeSkBCo4G5XtXs4yyyYozSR3suiFfNhqgoc14P0tVKkqovImxcCcLAkWlQ9B5hUl0gfdA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        ></script>
        <script defer>
          {`
            document.addEventListener("DOMContentLoaded", () => {
              const Scrollbar = window.Scrollbar;
              Scrollbar.init(document.body, {
                damping: 0.1,
                plugins: {
                  overscroll: {
                    effect: "bounce",
                  },
                },
              });
            });
          `}
        </script>
      </body>
    </html>
  );
}
