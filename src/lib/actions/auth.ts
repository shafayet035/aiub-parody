'use server';

import { cookies } from 'next/headers';

export const setCookies = async (token: string) => {
  cookies().set('auth_token', `${token}`, { secure: true });
};
