import { useState } from 'react';
import { supabase } from '../client';

const useProfiles = (): any => {
  const [data, setData] = useState<any>(null);

  const getProfiles = async (): Promise<void> => {
    const { data: profiles } = await supabase.from('profiles').select('id, username, avatar_url, website, name, surname, phone, country');

    setData(profiles);
  };

  return { data, getProfiles };
};

export default useProfiles;
