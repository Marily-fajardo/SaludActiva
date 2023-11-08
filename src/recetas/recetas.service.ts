import { Injectable } from '@nestjs/common';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Receta } from './entities/receta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecetasService {
  constructor(
    @InjectRepository(Receta)
    private recetaRepo: Repository<Receta>,
  ) {}
 async create(createRecetaDto: CreateRecetaDto) {
    const receta = this.recetaRepo.create(createRecetaDto);
    await this.recetaRepo.save(receta);
    return receta;
  }

  findAll() {
    return this.recetaRepo.find({ order: { id: 'ASC' } });
  }

  findOne(id: number) {
    return this.recetaRepo.findOneBy([{ id }]);
  }

 async update(id: number, updateRecetaDto: CreateRecetaDto) {
    const oldReceta = await this.findOne(id);
    const updatereceta = await this.recetaRepo.merge(
      oldReceta,
      updateRecetaDto,
    );
    await this.recetaRepo.save(updatereceta);
    return updatereceta;
    
  }

 async remove(id: number) {
    const receta = await this.findOne(id);
    await this.recetaRepo.remove(receta);
    return 'Receta eliminado';
  }
}
