import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membership } from './entities/membership.entity';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import axios from "axios";


@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(Membership)
    private membershipRepository: Repository<Membership>
  ) { }

  public async create(createMembershipDto: CreateMembershipDto) {
    const membership = await this.membershipRepository.create(createMembershipDto);
    await this.membershipRepository.save(membership);
    return membership;
  }

  async getListLoyaltyMembership(token: string) {


 

    let url = `${process.env.LOYALTY_API}/membership/mylist?orderField=membershipName&order=ASC&page=0&size=10&pricingType=1&statuses=0&uvrstatuses=1,0&vbstatuses=0,2&categories=`;
    
    let rst = null;

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    await axios.get(url).then(function (response) {
      rst = response.data;
    }).catch((response) => {
      console.log(response);
    });


    rst.data.forEach(async element => {
      let membershipDto: CreateMembershipDto = { ...element };
      const membership = await this.findOneByNftBlockIdAndVoucherContractAddress(membershipDto.nftBlockId, membershipDto.membershipContractAddress);
      if (membership) {
        this.update(membership.id, membershipDto);
      } else {
        this.create(membershipDto);
      }
      console.log(membershipDto);
    });
    return rst;

  }


  async findOneByNftBlockIdAndVoucherContractAddress(nftBlockId: string, membershipContractAddress: string) {
    const voucher = await this.membershipRepository.findOneBy({ nftBlockId: nftBlockId, membershipContractAddress: membershipContractAddress });
    return voucher;
  }


  async update(
    id,
    membershipDto: CreateMembershipDto,
  ) {

    return await this.membershipRepository.update({
      id
    },
      {
        membershipId: membershipDto.membershipId,
        membershipImageUrl: membershipDto.membershipImageUrl,
        membershipDescription: membershipDto.membershipDescription,
        membershipContractSymbol: membershipDto.membershipContractSymbol,
        membershipName: membershipDto.membershipName,
        membershipContractAddress: membershipDto.membershipContractAddress,
        nftBlockId: membershipDto.nftBlockId,
        nftBlockMintedBlockAddress: membershipDto.nftBlockMintedBlockAddress,
        userId: membershipDto.userId,
        brandId: membershipDto.brandId,

      }
    );
  }

}



// @Injectable()
// export class MembershipService {
//   create(createMembershipDto: CreateMembershipDto) {
//     return 'This action adds a new membership';
//   }

//   findAll() {
//     return `This action returns all membership`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} membership`;
//   }

//   update(id: number, updateMembershipDto: UpdateMembershipDto) {
//     return `This action updates a #${id} membership`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} membership`;
//   }
// }
