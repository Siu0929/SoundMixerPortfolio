import "./globals.css";

export const metadata = {
  title: "STUDIO — Brand, Editorial, Digital",
  description:
    "STUDIO is an independent creative practice specializing in minimal identity, editorial design, and digital experiences.",
  openGraph: {
    title: "STUDIO — Brand, Editorial, Digital",
    description:
      "An independent creative practice specializing in minimal identity, editorial design, and digital experiences.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}