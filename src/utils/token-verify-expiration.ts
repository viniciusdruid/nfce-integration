import * as jwt from 'jsonwebtoken';

export function verifyTokenExpiration(token: string): boolean {
  try {
    const decoded: any = jwt.decode(token);

    if (!decoded || !decoded.exp) {
      throw new Error('Invalid token structure');
    }

    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime < decoded.exp;
  } catch (error) {
    console.error('Error verifying token:', error.message);
    return false;
  }
}

export function getExpToken(token: string): number {
  try {
    const decoded: any = jwt.decode(token);

    if (!decoded || !decoded.exp) {
      throw new Error('Invalid token structure');
    }

    return Number(decoded.exp);
  } catch (error) {
    console.error('Error verifying token:', error.message);
    throw new Error('Error verifying token');
  }
}
