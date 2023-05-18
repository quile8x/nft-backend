import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membership } from './entities/membership.entity';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';


@Injectable()
export class MembershipService {
  // constructor(
  //   @InjectRepository(Membership)
  //   private membershipRepository: Repository<Membership>
  // ) { }

  // async getByEmail(email: string) {
  //   const user = await this.membershipRepository.findOneBy({ email: email });
  //   if (user) {
  //     return user;
  //   }
  //   throw new HttpException('User with this email does not exist ', HttpStatus.NOT_FOUND);
  // }

  // async getByID(userId: string) {
  //   const user = await this.membershipRepository.findOneBy({ membershipId: membershipId });
  //   if (user) {
  //     return user;
  //   }
  //   throw new HttpException('User with this user ID does not exist', HttpStatus.NOT_FOUND);
  // }


  // async create(userData: CreateMembershipDto) {
  //   const newUser = await this.usersRepository.create(userData);
  //   Logger.log("userData===============",newUser);
  //   await this.usersRepository.save(newUser);
  //   return newUser;
  // }

  // async update(
  //   userId,
  //   updateUserDto: UpdateUserDto,
  // ) {
  //   return await this.usersRepository.update({
  //     userId
  //   }, {
  //     loyatyRefreshToken: updateUserDto.loyatyRefreshToken,
  //   });

  // }
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
