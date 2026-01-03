"use client";
import { useFetch } from "@/hooks/useFetch";

interface ServiceImg {
  Title: string;
  description: string;
  imagen2: {
    url: string;
  };
}

export function useServiceImg() {
  return useFetch<ServiceImg>(
    "/api/service-ima?populate=*"
  );
}
