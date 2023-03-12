/* eslint-disable @typescript-eslint/naming-convention */
export interface ProfileValuesTypes {
  avatar_url?: string;
  country?: string;
  name?: string;
  phone?: number;
  surname?: string;
  username?: string;
  website?: string;
}

export const setProfileValues = ({
  avatar_url,
  country,
  name,
  phone,
  surname,
  username,
  website,
}: ProfileValuesTypes): ProfileValuesTypes => {
  const passedProfileValues = {
    avatar_url,
    country,
    name,
    phone,
    surname,
    username,
    website,
  };
  const clearEmptyValues = JSON.parse(JSON.stringify(passedProfileValues));
  return clearEmptyValues;
};
