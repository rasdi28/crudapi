import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MahasiswaService } from './mahasiswa.service';

@ApiTags('mahasiswa')
@Controller('mahasiswa')
export class MahasiswaController {

    constructor(private readonly mahasiswaService:MahasiswaService){}

    @Get()
    getAll(){
        return this.mahasiswaService.getAll();
    }
}
