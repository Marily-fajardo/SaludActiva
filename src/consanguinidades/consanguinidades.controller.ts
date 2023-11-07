import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ConsanguinidadesService } from './consanguinidades.service';
import { CreateConsanguinidadeDto } from './dto/create-consanguinidade.dto';
import { UpdateConsanguinidadeDto } from './dto/update-consanguinidade.dto';

@Controller('consanguinidades')
export class ConsanguinidadesController {
  constructor(
    private readonly consanguinidadesService: ConsanguinidadesService,
  ) {}

  @Post()
  async create(@Body() createConsanguinidadeDto: CreateConsanguinidadeDto) {
    return this.consanguinidadesService.create(createConsanguinidadeDto);
  }

  @Get()
  findAll() {
    return this.consanguinidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.consanguinidadesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConsanguinidadeDto: CreateConsanguinidadeDto,
  ) {
    return this.consanguinidadesService.update(+id, updateConsanguinidadeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.consanguinidadesService.remove(+id);
  }
}
