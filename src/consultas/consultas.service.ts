import { Injectable } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Consulta } from './entities/consulta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConsultasService {
  constructor(
    @InjectRepository(Consulta)
    private consultaRepo: Repository<Consulta>,
  ) {}
  async create(createConsultaDto: CreateConsultaDto) {
    const consulta = this.consultaRepo.create(createConsultaDto);
    await this.consultaRepo.save(consulta);
    return consulta;
  }

  findAll() {
    return this.consultaRepo.find({ order: { id: 'ASC' } });
  }

  findOne(id: number) {
    return this.consultaRepo.findOneBy([{ id }]);
  }

  async update(id: number, updateConsultaDto: CreateConsultaDto) {
    const oldConsulta = await this.findOne(id);
    const updateconsulta = await this.consultaRepo.merge(
      oldConsulta,
      updateConsultaDto,
    );
    await this.consultaRepo.save(updateconsulta);
    return updateconsulta;
  }

  async remove(id: number) {
    const consulta = await this.findOne(id);
    await this.consultaRepo.remove(consulta);
    return 'Consulta eliminado';
  }
}
