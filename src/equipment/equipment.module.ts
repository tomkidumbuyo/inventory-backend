import { Module } from '@nestjs/common';
import { EquipmentController } from './equipment.controller';
import { EquipmentService } from './equipment.service';
import { DatabaseModule } from '@database/database.module';

@Module({
  controllers: [EquipmentController],
  providers: [EquipmentService],
  imports: [DatabaseModule],
})
export class EquipmentModule {}
