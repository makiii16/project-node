import {
    Column,
    Entity, JoinColumn, ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import {User} from "../user/user.entity";


@Entity('concerts')
export class Concert {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    start_time: Date;

    @Column()
    end_time: Date;

    @ManyToOne(()=>User, (user) => user.concerts,{eager:true})
    @JoinColumn({name: 'user_id'})
    user: User;
}
