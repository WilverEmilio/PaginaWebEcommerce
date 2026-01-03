"use client";
import { useFetch } from "@/hooks/useFetch";

export function useGetCategory() {
  return useFetch<any[]>("/api/categories?populate=*");
}
