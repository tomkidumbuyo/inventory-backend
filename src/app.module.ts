import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '@database/database.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
import { EquipmentModule } from './equipment/equipment.module';
import { MovementModule } from './movement/movement.module';
import ormConfig from '@database/config/ormconfig';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(ormConfig),
    DatabaseModule,
    AuthModule,
    StoreModule,
    EquipmentModule,
    MovementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
