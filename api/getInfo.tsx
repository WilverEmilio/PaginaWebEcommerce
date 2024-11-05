import { useEffect, useState } from 'react';

export function useInfo() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/info?populate=*`;
    const [resultI, setResult] = useState(null); 
    const [loadingI, setLoading] = useState(true);
    const [errorI, setError] = useState("");

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

    return { resultI, loadingI, errorI }; 
}
