import {Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import {CreateContentDto} from "./create-content.dto";
import {UpdateContentDto} from "./update-content.dto";
import {ContentService} from "./content.service";

@Controller('content')
export class ContentController {
    constructor(private contentService: ContentService) {
    }

    @Get()
    getAll() {
        return this.contentService.getAll();
    }

    @Post()
    create(@Body() data: CreateContentDto) {
        return this.contentService.create(data);
    }

    @Get(':id')
    getSubjectById(@Param('id') id: number) {
        return this.contentService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id:number,
        @Body() data : UpdateContentDto
    )  {
        return await this.contentService.update(id,data);
    }

    @Delete(':id')
    delete(@Param('id') id:number) {
        return this.contentService.delete(id);
    }
}
