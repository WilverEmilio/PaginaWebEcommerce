"use client";
import { useFetch } from "@/hooks/useFetch";

export function useExperience() {
  return useFetch<any[]>("/api/experiences?populate=*");
}
