import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEquipmentModelDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  modelNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  modelName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  length: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  width: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  height: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  weight: number;
}

export class UpdateEquipmentModelDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  modelNumber: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  modelName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  length: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  width: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  height: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  weight: number;
}

export class CreateEquipmentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  serialNumber: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  purchaseDate: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  equipmentTypeId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  binId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  storeId: string;
}

export class UpdateEquipmentDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  serialNumber: string;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  purchaseDate?: Date;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  equipmentTypeId?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  binId?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  storeId?: string;
}
