import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//import Joi from 'joi';
import * as Joi from 'joi';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './users/user.entity';


@Module({
  imports: [
    AuthenticationModule,
    ConfigModule.forRoot({
    validationSchema: Joi.object({
      //...
      JWT_SECRET: Joi.string().required(),
      JWT_EXPIRATION_TIME: Joi.string().required(),
    })
  }),
  TypeOrmModule.forRoot({
    type: 'mysql', // type de base de données que vous utilisez
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
    entities: [User],
    synchronize: true,
  }),
  ],
  controllers: [AuthenticationController],
  providers: [],
})
export class AppModule {}
