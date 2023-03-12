import { useState } from 'react';
import { supabase } from '../client';
import { arrToObj } from '../utils/arrToObj';
import { setProfileValues } from '../utils/setProfileValues';

interface Props {
  id: string;
  userPropName: string;
  value: string;
}

const useUpdateProfile = ({ id, userPropName, value }: Props): any => {
  const [isLoading, setIsLoading] = useState(false);
  const combinePropNameAndValue = arrToObj([userPropName, value]);
  const passedProfileValue = setProfileValues(combinePropNameAndValue);

  const updateProfile = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await supabase.from('profiles').update(passedProfileValue).eq('id', id);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return { updateProfile, isLoading };
};

export default useUpdateProfile;
