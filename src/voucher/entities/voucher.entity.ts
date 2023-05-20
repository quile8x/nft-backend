import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { Brand } from '../../brand/entities/brand.entity';


@Entity()
export class Voucher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  voucherId: string;

  @Column({ nullable: true })
  voucherName: string;

  @Column({ nullable: true })
  voucherDescription?: string;

  @Column({ nullable: true })
  voucherContractAddress?: string;

  @Column({ nullable: true })
  voucherValue?: string;

  @Column({ nullable: true })
  voucherImageUrl?: string;

  @Column({ nullable: true })
  voucherContractSymbol?: string;

  @Column({ nullable: true })
  nftBlockId?: string;


  @Column({ nullable: true })
  nftBlockMintedBlockAddress?: string;


  @Column({ nullable: true })
  brandId: string;

  @Column({ nullable: true })
  userId?: string;

  // @OneToOne(type => Brand) @JoinColumn()
  // brand: Brand

  // // @Column({ nullable: true })
  // // userId?: string;
  // @OneToOne(type => User) @JoinColumn()
  // user: User

  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  upatedAt?: Date;

}
