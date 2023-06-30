import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Content} from "./content.entity";

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(Content) private readonly contentRepositiry: Repository<Content>
    ) {
    }

    getAll(): Promise<Content[]> {
        return this.contentRepositiry.find();
    }

    findOne(id:number): Promise<Content> {
        return this.contentRepositiry.findOne({id});
    }

    create(data): Promise<Content> {
        return this.contentRepositiry.save(data);
    }

    delete(id:number) {
        this.contentRepositiry.delete({id});
    }

    async update(id:number, data): Promise<Content> {
        await this.contentRepositiry.update(id, data);
        return this.findOne(id);
    }
}
