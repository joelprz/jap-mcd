'use server'
import { signOut as _signout} from '@/auth';
import { AuthError } from 'next-auth';

export async function signout(
    prevState: string | undefined,
  ) {
    try {
      await _signout();
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'SignOutError':
            return 'Unable to sign out.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }  