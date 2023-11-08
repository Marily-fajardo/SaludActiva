import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepo: Repository<Paciente>,
  ) {}
  async create(createPacienteDto: CreatePacienteDto) {
    const paciente = this.pacienteRepo.create(createPacienteDto);
    await this.pacienteRepo.save(paciente);
    return paciente;
  }

  findAll() {
    return this.pacienteRepo.find({
      order: { id: 'ASC' },
      relations: {
        genero: true,
        consultas: true,
        recetas: true,
        consanguinidades: true,
        usuarios: true,
      },
    });
  }

  findOne(id: number) {
    return this.pacienteRepo.findOne({
      where: { id },
      relations: {
        genero: true,
        consultas: true,
        recetas: true,
        consanguinidades: true,
        usuarios: true,
      },
    });
  }

  async update(id: number, updatePacienteDto: CreatePacienteDto) {
    const oldPaciente = await this.findOne(id);
    const updatepaciente = await this.pacienteRepo.merge(
      oldPaciente,
      updatePacienteDto,
    );
    await this.pacienteRepo.save(updatepaciente);
    return updatepaciente;
  }

  async remove(id: number) {
    const paciente = await this.findOne(id);
    await this.pacienteRepo.remove(paciente);
    return 'Paciente eliminado';
  }
}
