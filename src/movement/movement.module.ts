import { Module } from '@nestjs/common';
import { MovementController } from './movement.controller';
import { MovementService } from './movement.service';
import { DatabaseModule } from '@database/database.module';

@Module({
  controllers: [MovementController],
  providers: [MovementService],
  imports: [DatabaseModule],
})
export class MovementModule {}
