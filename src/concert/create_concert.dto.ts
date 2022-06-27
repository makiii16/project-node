import {IsNotEmpty, IsString} from "class-validator";

export class CreateConcertDto {
    @IsNotEmpty()
    @IsString()
    time: Date;

    @IsNotEmpty()
    @IsString()
    time_start: Date;

    @IsNotEmpty()
    end_time: Date;
    date: any;
}
