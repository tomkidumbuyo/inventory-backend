import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { DatabaseModule } from '@database/database.module';

@Module({
  controllers: [StoreController],
  providers: [StoreService],
  imports: [DatabaseModule],
})
export class StoreModule {}
