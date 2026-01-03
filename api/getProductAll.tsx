"use client";
import { useFetch } from "@/hooks/useFetch";

export function useGetProductsAll() {
  return useFetch<any[]>("/api/products?populate=*");
}
