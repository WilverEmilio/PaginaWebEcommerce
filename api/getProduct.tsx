"use client";
import { useFetch } from "@/hooks/useFetch";

export function useGetProducts(id: number) {
  // ✅ CORRECTO: Usar filters en lugar de /id directo
  const { result, loading, error } = useFetch<any[]>(
    `/api/products?populate=*&filters[id][$eq]=${id}`
  );
  
  return {
    // ✅ result será un array, igual que los demás endpoints
    result: Array.isArray(result) ? result : [],
    loading,
    error
  };
}