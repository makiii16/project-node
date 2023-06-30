import {
    Column, CreateDateColumn,
    Entity, JoinColumn, ManyToOne,
    PrimaryGeneratedColumn, UpdateDateColumn,
} from "typeorm";
import {User} from "../user/user.entity";
import {Content} from "../content/content.entity";


@Entity('concerts')
export class Concert {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


    @ManyToOne(()=>User, (user) => user.concerts,{eager:true})
    @JoinColumn({name: 'user_id'})
    user: User;

    @ManyToOne(()=>Content, (content) => content.concerts,{eager:true})
    @JoinColumn({name: 'content_id'})
    content1: Content;
}
