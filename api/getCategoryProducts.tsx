"use client";
import { useEffect, useState } from 'react';

export function useGetProductsCategory(slug: string | string[]) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
    const [Result, setResult] = useState(null); 
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState("");

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

    return { Result, Loading, Error }; 
}