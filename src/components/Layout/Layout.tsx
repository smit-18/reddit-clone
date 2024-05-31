import React, { ReactElement, ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
