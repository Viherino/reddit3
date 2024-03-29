import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'reddit',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
      UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
