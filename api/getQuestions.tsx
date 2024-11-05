"use client";
import { useEffect, useState } from 'react';

export function useQuestions() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions`;
    const [resultado, setResult] = useState(null); 
    const [carga, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setResult(json.data);
                setLoading(false); 
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [url]);

    return { resultado, carga }; 
}
