import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genero } from './entities/genero.entity';

@Injectable()
export class GenerosService {
  constructor(
    @InjectRepository(Genero)
    private generoRepo: Repository<Genero>,
  ) {}
  async create(createGeneroDto: CreateGeneroDto) {
    const genero = this.generoRepo.create(createGeneroDto);
    await this.generoRepo.save(genero);
    return genero;
  }

  findAll() {
    return this.generoRepo.find({ order: { id: 'ASC' } });
  }

  findOne(id: number) {
    return this.generoRepo.findOneBy([{ id }]);
  }

  async update(id: number, cambios: CreateGeneroDto) {
    const oldGenero = await this.findOne(id);
    const updategenero = await this.generoRepo.merge(oldGenero, cambios);
    await this.generoRepo.save(updategenero);
    return updategenero ;
  }

  async remove(id: number) {
    const genero = await this.findOne(id);
    await this.generoRepo.remove(genero);
    return 'Genero eliminado';
  }
}
