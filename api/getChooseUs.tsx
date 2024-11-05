"use client";
import { useEffect, useState } from 'react';

export function UseChooseUsSection() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/choose-us?populate=*`;
    const [resultU, setResult] = useState(null); 
    const [loadingU, setLoading] = useState(true);
    const [errorU, setError] = useState("");

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

    return { resultU, loadingU, errorU }; 
}
