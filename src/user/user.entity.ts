import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Concert} from "../concert/concert.entity";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @OneToMany(()=>Concert,(concert)=>concert.user)
    concerts: Concert[];
}
