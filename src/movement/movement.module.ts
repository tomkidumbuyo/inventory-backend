import { Module } from '@nestjs/common';
import { MovementController } from './movement.controller';
import { MovementService } from './movement.service';

@Module({
  controllers: [MovementController],
  providers: [MovementService]
})
export class MovementModule {}
