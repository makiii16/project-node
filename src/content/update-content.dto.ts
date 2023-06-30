import {IsOptional, IsString} from "class-validator";

export class UpdateContentDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    type?: string;

    @IsOptional()
    @IsString()
    description?:string;
}
