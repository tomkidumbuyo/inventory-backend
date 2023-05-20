import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import {
  ChangeStoreManagerDto,
  CreateStoreDto,
  UpdateStoreDto,
} from '@database/dtos/store.dto';
import {
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  Request,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StoreService } from './store.service';

@Controller('store')
@ApiTags('store')
@UseGuards(JwtAuthGuard)
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Post('create')
  createStore(@Request() req, @Body() createStoreInput: CreateStoreDto) {
    this.storeService.createStore(createStoreInput, req.user);
  }

  @Get('get')
  getAllStores() {
    this.storeService.getAllStores();
  }

  @Get('get/:storeId')
  getStoreById(@Request() req, @Param() params: any) {
    this.storeService.getStoreById(params.storeId);
  }

  @Put('update/:storeId')
  updateStore(
    @Request() req,
    @Param() params: any,
    @Body() updateStoreInput: UpdateStoreDto,
  ) {
    this.storeService.updateStore(
      { id: params.storeId, ...updateStoreInput },
      req.user.id,
    );
  }

  @Put('update/:storeId')
  changeStoreManager(
    @Request() req,
    @Param() params: any,
    @Body() changeStoreManagerInput: ChangeStoreManagerDto,
  ) {
    this.storeService.changeStoreManager(
      {
        storeId: params.storeId,
        storeManagerId: changeStoreManagerInput.storeManagerId,
      },
      req.user.id,
    );
  }
}
