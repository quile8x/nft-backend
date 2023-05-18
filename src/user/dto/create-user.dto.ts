export class CreateUserDto {
    name?: string;
    email?: string;
    walletAddress: string;
    nonce?: string;
    refreshToken?: string;
    loyatyRefreshToken?: string;
    userId?: string;
  }