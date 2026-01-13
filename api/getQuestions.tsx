"use client";
import { useFetch } from "@/hooks/useFetch";

export function useQuestions() {
  const { result, loading, error } = useFetch<any[]>("/api/questions"); 

  return {
    resultado: result ?? [], 
    carga: loading,
    error,
  };
}