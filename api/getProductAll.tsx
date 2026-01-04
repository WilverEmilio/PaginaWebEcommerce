"use client";
import { useFetch } from "@/hooks/useFetch";

export function useGetProductsAll() {
  const { result, loading, error } = useFetch<any[]>("/api/products?populate=*");
  
  return {
    // ✅ Asegura que siempre sea un array
    result: Array.isArray(result) ? result : [],
    loading,
    error
  };
}