"use client";
import { useEffect, useState } from 'react';

export function useGetProductsAll() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*`;
    const [result, setResult] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setResult(json.data);
                setLoading(false); 
            } catch (Error: any) {
                setError(Error);
                setLoading(false);
            }
        })();
    }, [url]);

    return { result, loading, error }; 
}