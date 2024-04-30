"use client";

import { env } from "next-runtime-env";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const API_URL = env("NEXT_PUBLIC_API_URL");
    console.log(API_URL);
  }, []);

  return <div className="font-bold">hello home</div>;
}
