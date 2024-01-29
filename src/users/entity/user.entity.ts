import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Image } from 'src/media/entity/images.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column({ default: 'user'})
    role: string

    @OneToOne(() => Image, (image) => image.id, { onDelete: 'SET NULL'} )
    avatar: Image

    @Column({ default: false })
    isConfirmed: boolean

    @CreateDateColumn()
    crearedAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}