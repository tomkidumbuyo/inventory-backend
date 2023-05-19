import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InventoryModule } from './inventory/inventory.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '@database/database.module';
import { AuthModule } from './auth/auth.module';
import ormConfig from '@database/config/ormconfig';

@Module({
  imports: [
    UsersModule,
    InventoryModule,
    TypeOrmModule.forRoot(ormConfig),
    DatabaseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
