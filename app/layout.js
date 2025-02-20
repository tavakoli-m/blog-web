import "@/public/IranSans/fontiran.css"
import "./globals.css";
import QueryProvider from "@/context/QueryProvider";


export const metadata = {
  title: "وبلاگ من",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
