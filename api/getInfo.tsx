"use client";
import { useFetch } from "@/hooks/useFetch";

export function useInfo() {
  return useFetch<any>("/api/info?populate=*");
}
