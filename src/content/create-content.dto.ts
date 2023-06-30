import {IsNotEmpty, IsString} from "class-validator";

export class CreateContentDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    description:string;
}
