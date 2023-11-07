import { PartialType } from '@nestjs/mapped-types';
import { CreateConsanguinidadeDto } from './create-consanguinidade.dto';

export class UpdateConsanguinidadeDto extends PartialType(CreateConsanguinidadeDto) {}
