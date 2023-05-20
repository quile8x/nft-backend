export class CreateUserDto {
    name?: string;
    email?: string;
    phone?: string;
    walletAddress: string;
    nonce?: string;
    refreshToken?: string;
    loyaltyRefreshToken?: string;
    loyaltyToken?: string;
    userId?: string;
  }