"use client";
import { useFetch } from "@/hooks/useFetch";

export function useQuestions() {
  // ✅ CORRECTO: Agregar /api/ y populate
  const { result, loading, error } = useFetch<any[]>("/api/questions?populate=*");

  return {
    // ✅ Asegura que siempre sea un array
    resultado: Array.isArray(result) ? result : [],
    carga: loading,
    error,
  };
}