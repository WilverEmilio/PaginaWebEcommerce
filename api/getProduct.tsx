"use client";
import { useFetch } from "@/hooks/useFetch";

export function useGetProducts(id: number) {
  return useFetch<any>(
    `/api/products?populate=*&filters[id][$eq]=${id}`
  );
}
