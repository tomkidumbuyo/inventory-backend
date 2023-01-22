import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [UsersModule, InventoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
