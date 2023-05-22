import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  storeManagerId: string;
}

export class UpdateStoreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

export class ChangeStoreManagerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  storeManagerId: string;
}

export class CreateBinDto {}

export class CreateRackDto {}

export class CreateShelfDto {
  number: string;
  storeId: string;
}

export class UpdateBinDto {}

export class UpdateRackDto {}

export class UpdateShelfDto {}
