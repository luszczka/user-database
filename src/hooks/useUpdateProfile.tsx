import { supabase } from '../client';

interface Props {
  id: string;
  value: string | number;
}

const useUpdateProfile = ({ id, value }: Props): any => {
  const updateProfile = async (): Promise<void> => {
    const { error } = await supabase
      .from('profiles')
      .update({ username: `${value}` })
      .eq('id', id);
  };

  return { updateProfile };
};

export default useUpdateProfile;
