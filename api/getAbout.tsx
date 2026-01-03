"use client";
import { useFetch } from "@/hooks/useFetch";

export function useAbout() {
  return useFetch<any>("/api/about?populate=*");
}
