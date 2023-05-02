import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className={`pb-12  ${inter.className}`}>{children}</main>
    </>
  );
};

export default Layout;
