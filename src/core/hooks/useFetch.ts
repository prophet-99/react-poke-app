import { useEffect, useState } from 'react';

const useFetch = <T>(url: string, method = 'GET') => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    async function request() {
      try {
        setIsLoading(true);

        const fetchData = await fetch(url, {
          method,
          signal: controller.signal,
        });
        if (!fetchData.ok)
          throw new Error(`HTTP error! status: ${fetchData.status}`);

        const parsedData = (await fetchData.json()) as T;
        if (!controller.signal.aborted) {
          setData(parsedData);
          setError(null);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setData(null);
          setError(error instanceof Error ? error : new Error('Unknown Error'));
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void request();

    return () => {
      controller.abort();
    };
  }, [url, method]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useFetch;
