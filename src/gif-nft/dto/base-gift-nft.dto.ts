export class BaseGiftNftDto {
    walletAddress: string
    contractAddress: string
    contractName: string
    hash: string
    tokenID: string
    isClaim?: boolean;
 }