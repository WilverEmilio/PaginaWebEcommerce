"use client";
import { useFetch } from "@/hooks/useFetch";

export function useGetProductsCategory(slug: string | string[]) {
  return useFetch<any[]>(
    `/api/products?populate=*&filters[category][slug][$eq]=${slug}`
  );
}
