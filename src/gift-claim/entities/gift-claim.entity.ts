
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Gift } from "../../gift/entities/gift.entity";


@Entity()
export class GiftClaim {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column("simple-array")
  // giftIds: string[];

  // @OneToMany(type => Gift, gift => gift.id)
  // gifts: Gift[];


  // @OneToMany(() => Gift, (gift) => gift.id) // note: we will create author property in the Photo class below
  // gifts: Gift[]

  @ManyToMany(() => Gift)
  @JoinTable()
  listGifts: Gift[]


  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: number;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  userId: string;

  @Column({ nullable: true })
  status: string

  @Column({ nullable: true })
  deliveryDoc: string;

  @Column({ nullable: true })
  deliveryLink: string;

  @Column({ nullable: true })
  deliveryNote: string;

  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  upatedAt?: Date;

}