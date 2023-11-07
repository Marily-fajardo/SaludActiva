import { Injectable } from '@nestjs/common';
import { CreateConsanguinidadeDto } from './dto/create-consanguinidade.dto';
import { UpdateConsanguinidadeDto } from './dto/update-consanguinidade.dto';

@Injectable()
export class ConsanguinidadesService {
  create(createConsanguinidadeDto: CreateConsanguinidadeDto) {
    return 'This action adds a new consanguinidade';
  }

  findAll() {
    return `This action returns all consanguinidades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consanguinidade`;
  }

  update(id: number, updateConsanguinidadeDto: UpdateConsanguinidadeDto) {
    return `This action updates a #${id} consanguinidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} consanguinidade`;
  }
}
