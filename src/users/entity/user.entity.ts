import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn({ name: 'image_id' })
    id: number

    


    @CreateDateColumn()
    crearedAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}