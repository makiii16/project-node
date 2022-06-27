import {IsNumber, IsOptional, IsString} from "class-validator";

export class UpdateConcertDto {
    @IsString()
    @IsOptional()
    time?:Date;

    @IsOptional()
    @IsString()
    time_start_?:Date;

    @IsOptional()
    @IsNumber()
    end_time?:Date;
}
