"use client";
import { useFetch } from "@/hooks/useFetch";

export function useChooseUsSection() {
  return useFetch<any>("/api/choose-us?populate=*");
}
