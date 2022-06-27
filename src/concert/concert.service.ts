import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Concert} from "./concert.entity";


@Injectable()
export class ConcertService {
    constructor(
        @InjectRepository(Concert) private readonly postRepository: Repository<Concert>
    ) {
    }

    getAll(): Promise<Concert[]> {
        return this.postRepository.find();
    }

    create(data): Promise<Concert> {
        return this.postRepository.save(data);
    }

    findOne(id: number): Promise<Concert> {
        return this.postRepository.findOne({id});
    }

    async update(id:number,data): Promise<Concert> {
        await this.postRepository.update(id,data);

        return this.findOne(id);
    }

    delete(id:number) {
        return this.postRepository.delete({id});
    }
}
