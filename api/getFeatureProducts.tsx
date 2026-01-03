"use client";
import { useFetch } from "@/hooks/useFetch";

export function useGetFeatureProducts() {
  return useFetch<any[]>(
    "/api/products?filters[isFeature][$eq]=true&populate=*"
  );
}
