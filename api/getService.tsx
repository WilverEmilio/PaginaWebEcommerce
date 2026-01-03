"use client";
import { useFetch } from "@/hooks/useFetch";

export function useService() {
  return useFetch<any[]>("/api/services?populate=*");
}
