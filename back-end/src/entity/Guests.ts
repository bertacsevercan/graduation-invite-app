import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Guests {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    isComing: boolean;

}
