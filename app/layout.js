import "@/styles/globals.css";

export const metadata = {
  title: "Kaushal Chauhan Portfolio",
  description: "React js | Next js | FrontEnd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/logo.svg" />
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
