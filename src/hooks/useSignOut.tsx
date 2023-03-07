import { useState } from 'react';
import { supabase } from '../client';
import { type UserLogOut } from '../dataTypes/UserLogOut';

const useSignOut = (): UserLogOut => {
  const [error, setError] = useState<any>();

  const signOut = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    setError(error);
  };
  return { error, signOut };
};

export default useSignOut;
