"use client";
import { useEffect, useState } from "react";

interface FetchState<T> {
  result: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(endpoint: string): FetchState<T> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [result, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!baseUrl) {
      setError("NEXT_PUBLIC_BACKEND_URL no está configurado");
      setLoading(false);
      return;
    }

    const url = `${baseUrl}${endpoint}`;

    (async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const json = await response.json();
        
        // ✅ Asegúrate de que siempre haya un valor
        setResult(json?.data ?? null);
        setError(null); // ✅ Limpia errores previos
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message ?? "Unknown error");
        setResult(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [endpoint, baseUrl]);

  return { result, loading, error };
}