import { useState, useEffect } from 'react';
import { supabase } from '../client';

interface UseFetchResult {
  data: any | null;
  fetcher: () => Promise<void>;
}

const useFetch = (): UseFetchResult => {
  const [data, setData] = useState<any>();
  const fetcher = async (): Promise<void> => {
    try {
      const { data } = await supabase.from('blogPost').select();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error, 'ERROR');
    }
  };
  useEffect(() => {
    void fetcher();
  }, []);
  return { data, fetcher };
};

export default useFetch;
