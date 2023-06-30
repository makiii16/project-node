import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CommonModule} from "../common/common.module";
import {Content} from "./content.entity";
import {ContentService} from "./content.service";
import {ContentController} from "./content.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Content]),
        CommonModule
    ],
    controllers: [ContentController],
    providers: [ContentService]
})
export class ContentModule {}
