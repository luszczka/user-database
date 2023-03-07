import useSessionProvider from '../hooks/useSessionProvider';

export const isAdmin = (): boolean => {
  const { session } = useSessionProvider();
  if (!session?.user.app_metadata.claims_admin) {
    return false;
  }
  return true;
};
