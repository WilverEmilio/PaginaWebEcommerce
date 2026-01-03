"use client";
import { useFetch } from "@/hooks/useFetch";

export function useHeader() {
  return useFetch<any>("/api/header?populate=*");
}
