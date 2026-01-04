"use client";
import { useFetch } from "@/hooks/useFetch";

export function useGetProductsCategory(slug: string | string[]) {
  const { result, loading, error } = useFetch<any[]>(
    `/api/products?populate=*&filters[category][slug][$eq]=${slug}`
  );
  
  return {
    // ✅ Asegura que siempre sea un array
    result: Array.isArray(result) ? result : [],
    loading,
    error
  };
}