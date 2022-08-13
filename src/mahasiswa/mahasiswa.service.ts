import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mahasiswa } from './mahasiswa.entity';

@Injectable()
export class MahasiswaService {

    constructor(
        @InjectRepository(Mahasiswa)
        private mahasiswaRepo: Repository<Mahasiswa>,
    ){}

    async getAll():Promise<Mahasiswa[]>{
        return await this.mahasiswaRepo.find();
    }

}
