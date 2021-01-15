import { useState, useCallback, useEffect, useRef } from "react";

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequests = useRef([]);

    const sendRequest = useCallback(async (url, method = "GET", headers = {}, body = null) => {
        setIsLoading(true);
        const httpAbortCtrll = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrll);
        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtrll.signal,
            });

            // console.log("response", response);
            const responseData = await response.json();

            activeHttpRequests.current = activeHttpRequests.current.filter((reqCtrl) => reqCtrl !== httpAbortCtrll);

            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setIsLoading(false);
            return responseData;
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
            throw error;
        }
    }, []);

    const clearError = () => {
        setError(null);
    };

    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
        };
    }, []);

    return { isLoading, error, sendRequest, clearError, setIsLoading };
};
