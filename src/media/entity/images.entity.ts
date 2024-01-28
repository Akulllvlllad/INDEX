import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn()
    crearedAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}