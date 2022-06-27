import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CommonModule} from "../common/common.module";
import {ConcertService} from "./concert.service";
import {Concert} from "./concert.entity";
import {ConcertController} from "./concert.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Concert]),
    CommonModule
  ],
  controllers: [ConcertController],
  providers: [ConcertService]
})
export class PostModule {}

export class ConcertModule {
}
