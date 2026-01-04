"use client";
import { useFetch } from "@/hooks/useFetch";

export function useAbout() {

  type About = {
    Title: string;
    phrase: string;
    About_Us: string;

    About_Principal?: {
      url: string;
    };

    image?: {
      url: string;
    };
  };

  return useFetch<About>("/api/about?populate=*");
}
