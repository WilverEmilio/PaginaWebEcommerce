"use client";
import { useFetch } from "@/hooks/useFetch";

export function useHome() {
  return useFetch<any[]>("/api/homes?populate=*");
}
