import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("mmahasiswa")
export class Mahasiswa{

    @PrimaryGeneratedColumn()
    mmahasiswapk:number;

    @Column()
    @ApiProperty()
    name:string;

    @Column()
    @ApiProperty()
    npm:string;

    @Column()
    @ApiProperty()
    address:string;

    @Column('date')
    @ApiProperty()
    last_updated:string;

    @Column()
    @ApiProperty()
    created_by:string;

    @Column()
    @ApiProperty()
    updated_by:string;


}