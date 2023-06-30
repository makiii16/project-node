import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { ConcertModule } from './concert/concert.module';
import {ContentModule} from './content/content.module';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
    type: 'postgres',

    host: '194.249.251.33',
    port: 5432,
    username: 'sum2201',
    password: 'Univ3s3+100',
    database: 'petar-project',
      autoLoadEntities: true,
    entities: [],
    synchronize: true,
  }),
    CommonModule,
    AuthModule,
    ConcertModule,
    ContentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
