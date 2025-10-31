
import { useState, useEffect } from "react";


// Generic custom hook

function useFetch<T>(url: string): [T | null] {
  
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const jsonData: T = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return [data];
}

export default useFetch;
