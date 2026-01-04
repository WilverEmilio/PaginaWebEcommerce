"use client";
import { useFetch } from "@/hooks/useFetch";

export function useAbout() {

  type About = {
    // ===== SECCIÓN ABOUT =====
    Title: string;
    phrase: string;
    About_Us: string;

    About_Principal?: {
      url: string;
    };

    About_Secundario?: {
      url: string;
    };

    image?: {
      url: string;
    };

    Question?: {
      url: string;
    };

    // ===== SECCIÓN QUÉ HACEMOS =====
    What_We_Do_Description?: string;

    What_We_Do_OneTitle?: string;
    What_We_Do_OneDescription?: string;

    What_We_Do_TwoTitle?: string;
    What_We_Do_TwoDescription?: string;

    What_We_Do_ThreeTitle?: string;
    What_We_Do_ThreeDescription?: string;
  };

  return useFetch<About>("/api/about?populate=*");
}
