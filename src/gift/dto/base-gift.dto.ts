export class BaseGiftDto {
    title: string
    des: string
    contractName?: string
    contractAddress?: string
    contract?: ContractDto[]
    urlImage?: string
    isClaim?: boolean
 }


 export class ContractDto {
    name: string
    address: string
 }