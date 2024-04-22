import { Inter } from "next/font/google";
import "./main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Horsemosegaard",
  description:
    "Selskabslokaler i Bjæverskov, tæt på Køge og Ringsted. Vi skaber de hyggeligste rammer om dit arrangement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
