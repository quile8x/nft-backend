import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';

import { Gift } from "../../gift/entities/gift.entity";
import { User } from '../../user/entities/user.entity';
import { Brand } from '../../brand/entities/brand.entity';
import { Voucher } from '../../voucher/entities/voucher.entity';
import { Membership } from '../../membership/entities/membership.entity';



@Entity()
export class GiftAssignment {
  @PrimaryGeneratedColumn()
  id: number;

  //   @Column({ nullable: true })
  //   giftId: number;

  @OneToOne(type => Gift) @JoinColumn()
  gift: Gift

  //   @ManyToMany(type => Gift) @JoinTable() 
  //   classes: Gift[];

  // @Column({ nullable: true })
  // membershipId?: string;
  @OneToOne(type => Membership) @JoinColumn()
  membership: Membership


  // @Column({ nullable: true })
  // voucherId: string;
  @OneToOne(type => Voucher) @JoinColumn()
  voucher: Voucher


  // @Column({ nullable: true })
  // brandId: string;
  @OneToOne(type => Brand) @JoinColumn()
  brand: Brand

  // @Column({ nullable: true })
  // userId?: string;
  @OneToOne(type => User) @JoinColumn()
  user: User

  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  upatedAt?: Date;

}