import { Injectable } from '@nestjs/common';
import { CreateConsanguinidadeDto } from './dto/create-consanguinidade.dto';
import { UpdateConsanguinidadeDto } from './dto/update-consanguinidade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consanguinidade } from './entities/consanguinidade.entity';

@Injectable()
export class ConsanguinidadesService {
  constructor(
    @InjectRepository(Consanguinidade)
    private generoRepo: Repository<Consanguinidade>,
  ) {}
  async create(createConsanguinidadeDto: CreateConsanguinidadeDto) {
    const consanguinidade = this.generoRepo.create(createConsanguinidadeDto);
    await this.generoRepo.save(consanguinidade);
    return consanguinidade;
  }

  findAll() {
    return this.generoRepo.find({ order: { id: 'ASC' } });
  }

  findOne(id: number) {
    return this.generoRepo.findOneBy([{ id }]);
  }

  async update(id: number, updateConsanguinidadeDto: CreateConsanguinidadeDto) {
    const oldConsanguinidade = await this.findOne(id);
    const updateconsanguinidade = await this.generoRepo.merge(
      oldConsanguinidade,
      updateConsanguinidadeDto,
    );
    await this.generoRepo.save(updateconsanguinidade);
    return updateconsanguinidade;
  }

  async remove(id: number) {
    const consanguinidade = await this.findOne(id);
    await this.generoRepo.remove(consanguinidade);
    return 'Consanguinidade eliminado';
  }
}
