import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsanguinidadesService } from './consanguinidades.service';
import { CreateConsanguinidadeDto } from './dto/create-consanguinidade.dto';
import { UpdateConsanguinidadeDto } from './dto/update-consanguinidade.dto';

@Controller('consanguinidades')
export class ConsanguinidadesController {
  constructor(private readonly consanguinidadesService: ConsanguinidadesService) {}

  @Post()
  create(@Body() createConsanguinidadeDto: CreateConsanguinidadeDto) {
    return this.consanguinidadesService.create(createConsanguinidadeDto);
  }

  @Get()
  findAll() {
    return this.consanguinidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consanguinidadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsanguinidadeDto: UpdateConsanguinidadeDto) {
    return this.consanguinidadesService.update(+id, updateConsanguinidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consanguinidadesService.remove(+id);
  }
}
