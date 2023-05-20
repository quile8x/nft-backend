import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  userId?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  displayName?: string;

  @Column()
  walletAddress: string;

  @Column({ nullable: true })
  refreshToken?: string;

  @Column({ nullable: true })
  loyaltyRefreshToken?: string;

  @Column({ nullable: true })
  loyaltyToken?: string;

  @Column({ nullable: true })
  nonce?: string;

  @Column({ nullable: true })
  createdAt?: Date;

   @Column({ nullable: true })
  upatedAt?: Date;

}