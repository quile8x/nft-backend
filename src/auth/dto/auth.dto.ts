export class AuthDto {
    walletAddress: string;
    nonce: string;
  }

export class RequestLoginDTO {
  wallet?: string;
}

export class LoginDTO {
  wallet?: string;
  hash?: string;
}
