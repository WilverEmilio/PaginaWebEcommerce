"use client";
import { useFetch } from "@/hooks/useFetch";

export function useGetProducts(id: number) {
  const { result, loading, error } = useFetch<any>(
    `/api/products/${id}?populate=*`  // ✅ Usar el endpoint correcto
  );
  
  return {
    // ✅ result será UN OBJETO, no un array
    result: result || null,
    loading,
    error
  };
}