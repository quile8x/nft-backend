import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Brand } from '../../brand/entities/brand.entity';
import { GiftClaim } from '../../gift-claim/entities/gift-claim.entity';

@Entity()
export class Gift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  giftName: string;

  @Column({ nullable: true })
  giftDescription?: string;

  @Column({ nullable: true })
  giftImageUrl?: string;

  @Column({ nullable: true })
  giftQuantity: number;

  // @Column({ nullable: true })
  // brandId: string;
  @OneToOne(type => Brand) @JoinColumn() 
  brand: Brand


  // @Column({ nullable: true })
  // userId?: string;

  @OneToOne(type => User) @JoinColumn() 
  user: User

  // @ManyToOne(type => GiftClaim, giftClaim => giftClaim.id)
  // giftClaim: GiftClaim

  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  upatedAt?: Date;

}
