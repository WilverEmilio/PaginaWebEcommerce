"use client";
import { useEffect, useState } from 'react';

export function useHome() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/homes?populate=*`;
    const [resultH, setResult] = useState(null); 
    const [loadingH, setLoading] = useState(true);
    const [errorH, setError] = useState("");

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

    return { resultH, loadingH, errorH }; 
}
