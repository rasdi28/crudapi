import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mahasiswa } from './mahasiswa/mahasiswa.entity';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'postgress',
      database:'basic_nest',
      entities:[Mahasiswa],
      migrations:['dist/migrations/*{.ts,.js}'],
      migrationsTableName:'migrations_typeorm',
      migrationsRun:true
    }),
    MahasiswaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
