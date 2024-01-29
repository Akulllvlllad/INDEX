import { User } from "src/users/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn({ name: 'image_id' })
    id: number

    @Column()
    path: string

    @ManyToOne(() => User, (user) => user.id )
    @JoinColumn({ name: 'user_id' })
    user: User

    @CreateDateColumn()
    crearedAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}