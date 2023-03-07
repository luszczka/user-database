import { type User, type Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase } from '../client';
export interface SessionType {
  session: Session | null;
  user: User | undefined | null;
}

const useSessionProvider = (): SessionType => {
  const [value, setValue] = useState<Session | null>(null);
  const [user, setUser] = useState<User | undefined | null>(null);

  const getSession = async (): Promise<void> => {
    try {
      const data = await supabase.auth.getSession();
      setValue(data.data.session);
      setUser(data.data.session?.user);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    void getSession();
    supabase.auth.onAuthStateChange((_, session) => {
      setValue(session);
      setUser(session?.user);
    });
  }, [supabase]);

  return { session: value, user };
};

export default useSessionProvider;
