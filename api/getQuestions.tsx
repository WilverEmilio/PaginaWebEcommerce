"use client";
import { useFetch } from "@/hooks/useFetch";

export function useQuestions() {
  const { result,loading, error } = useFetch<any[]>("/questions");

  return {
    resultado: result,
    carga: loading,
    error,
  };
}
