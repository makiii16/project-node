import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
    UnauthorizedException,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {AuthGuard} from "../auth/auth.guard";
import {JwtService} from "@nestjs/jwt";
import {Request} from 'express';
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {ConcertService} from "./concert.service";
import {CreateConcertDto} from "./create_concert.dto";
import {UpdateConcertDto} from "./update_concert.dto";

@UseGuards(AuthGuard)
@Controller('concert')
export class ConcertController {

    constructor(
        private concertService:ConcertService,
        private jwtService: JwtService) {
    }

    @Get()
    getAll () {
        return this.concertService.getAll();
    }

    @Post()
    async create (
        @Body() data: CreateConcertDto,
        @Req() request: Request) {

        const jwt = request.cookies['jwt'];
        const user = await this.jwtService.verifyAsync(jwt);


        //console.log(user);
        return this.concertService.create({
            title: data.title,
            content_id: data.content_id,
            description: {id: data.description},
            user: {id: user.id}
        });
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename(_, file, callback) {
                return callback(null, file.originalname);
            }
        })
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
    }

    @Get(':id')
    getOne(@Param('id') id:number) {
        return this.concertService.findOne(id);
    }

    @Delete(':id')
    async delete (
        @Param('id') id:number,
        @Req() request: Request) {

        const jwt = request.cookies['jwt'];
        const user = await this.jwtService.verifyAsync(jwt);

        const concert = await this.getOne(id);
        if (concert.user.id != user.id) {
            throw new UnauthorizedException('Napaka!');
        }

        return this.concertService.delete(id);
    }

    @Put(':id')
    async update (
        @Param('id') id:number,
        @Body() data: UpdateConcertDto,
        @Req() request: Request
    ) {
        const jwt = request.cookies['jwt'];
        const user = await this.jwtService.verifyAsync(jwt);

        const concert = await this.getOne(id);
        if (concert.user.id != user.id) {
            throw new UnauthorizedException('Napaka!');
        }

        return this.concertService.update(id,data);
    }
}

