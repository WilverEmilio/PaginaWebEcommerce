"use client";
import { useFetch } from "@/hooks/useFetch";

export function useGetServicesID(id: number) {
  return useFetch<any>(
    `/api/services?populate=*&filters[id][$eq]=${id}`
  );
}
