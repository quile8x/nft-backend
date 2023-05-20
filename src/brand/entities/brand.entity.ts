import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  brandId?: string;

  @Column({ nullable: true })
  brandName?: string;

  @Column({ nullable: true })
  brandLogoUrl?: string;

  @Column({ nullable: true })
  userId?: string;

  @Column({ nullable: true })
  roleName?: string;

  @Column({ nullable: true })
  brandStaffId?: string;
  
  // @OneToOne(type => User) @JoinColumn() 
  // user: User

  @Column({ nullable: true })
  createdAt?: Date;

   @Column({ nullable: true })
  upatedAt?: Date;

}

