"use client";
import { useFetch } from "@/hooks/useFetch";

export function useHomeStart() {
  const { result, loading, error } = useFetch<any>("/api/home-start?populate=*");
 
  return {
    resultH: result,
    loadingH: loading,
    errorH: error,
  }
}
