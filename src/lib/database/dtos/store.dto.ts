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
