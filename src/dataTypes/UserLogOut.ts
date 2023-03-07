export interface UserLogOut {
  error: any;
  signOut: () => Promise<void>;
}
