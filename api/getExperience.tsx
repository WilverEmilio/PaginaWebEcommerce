"use client";
import { useEffect, useState } from 'react';

export function useExperience() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/experiences?populate=*`;
    const [resultE, setResult] = useState(null); 
    const [loadingE, setLoading] = useState(true);
    const [errorE, setError] = useState("");

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

    return { resultE, loadingE, errorE }; 
}
