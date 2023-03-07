import { useState } from 'react';
import { supabase } from '../client';
import { type NoResponseDataType, type ResponseDataType, type UseUserDataType } from '../dataTypes/Types';
import { type SupabasePaths } from '../utils/supabasePaths';

interface Props {
  email: string;
  password: string;
  supabasePath: SupabasePaths;
}

const useUserData = ({ email, password, supabasePath }: Props): UseUserDataType => {
  const [data, setData] = useState<ResponseDataType | NoResponseDataType | null>(null);
  const [error, setError] = useState<any>();

  const postData = async (): Promise<void> => {
    const { data, error } = await supabase.auth[supabasePath]({
      email,
      password,
    });
    setError(error);
    setData(data);
  };

  return { data, error, postData };
};

export default useUserData;
