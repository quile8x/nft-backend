import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { Brand } from '../../brand/entities/brand.entity';

@Entity()
export class Membership {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  membershipId: string;

  @Column({ nullable: true })
  membershipName: string;

  @Column({ nullable: true })
  membershipDescription?: string;

  @Column({ nullable: true })
  membershipImageUrl?: string;

  // @Column({ nullable: true })
  // brandId: string;

  // @Column({ nullable: true })
  // userId?: string;

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