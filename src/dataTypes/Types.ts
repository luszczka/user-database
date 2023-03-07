export interface UseUserDataType {
  data: ResponseDataType | NoResponseDataType | null;
  error: any;
  postData: () => Promise<void>;
}

export interface ProfileData {
  avatar_url: string;
  id: string;
  username: string;
  website: string;
  full_name: string;
}

export interface ResponseDataType {
  user: User | null;
  session: Session | null;
}

export interface NoResponseDataType {
  user: null;
  session: null;
}

export interface Session {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type: string;
  user: User;
}

export interface User {
  app_metadata: AppMetadata;
  aud: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  created_at: string;
  email: string;
  email_confirmed_at: string;
  id: string;
  identities: Identities[];
  last_sign_in_at: string;
  phone: string;
  role: string;
  updated_at: string;
  user_metadata: any;
}

export interface AppMetadata {
  claims_admin?: boolean;
  provider: string;
  providers: [];
}

export interface Identities {
  created_at: string;
  id: string;
  identity_data: IdentityData;
  last_sign_in_at: string;
  provider: string;
  updated_at: string;
  user_id: string;
}

export interface IdentityData {
  email: string;
  sub: string;
}
