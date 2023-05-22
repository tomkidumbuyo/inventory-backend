import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import {
  ChangeStoreManagerDto,
  CreateBinDto,
  CreateRackDto,
  CreateShelfDto,
  CreateStoreDto,
  UpdateBinDto,
  UpdateRackDto,
  UpdateShelfDto,
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
  Delete,
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
      req.user,
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

  @Post('shelves/:storeId')
  getStoreShelves(@Request() req, @Param() param) {
    return this.storeService.getStoreShelves(param.storeId, req.user);
  }

  @Post('create-bin')
  createBin(@Request() req, @Body() createStoreInput: CreateBinDto) {
    return this.storeService.createBin(createStoreInput, req.user);
  }

  @Post('update-bin/:binId')
  updateBin(
    @Request() req,
    @Param() param,
    @Body() createStoreInput: UpdateBinDto,
  ) {
    return this.storeService.updateBin(
      { createStoreInput, id: param.binId },
      req.user,
    );
  }

  @Delete('delete-bin/:binId')
  deleteBin(@Request() req, @Param() param) {
    return this.storeService.deleteBin(param.binId, req.user);
  }

  @Post('create-rack')
  createRack(@Request() req, @Body() createStoreInput: CreateRackDto) {
    return this.storeService.createRack(createStoreInput, req.user);
  }

  @Post('update-rack/:rackId')
  updateRack(
    @Request() req,
    @Param() param,
    @Body() createStoreInput: UpdateRackDto,
  ) {
    return this.storeService.updateRack(
      { createStoreInput, id: param.rackId },
      req.user,
    );
  }

  @Delete('delete-shelf/:shelfId')
  deleteRack(@Request() req, @Param() param) {
    return this.storeService.deleteRack(param.shelfId, req.user);
  }

  @Post('create-shelf')
  createShelf(@Request() req, @Body() createStoreInput: CreateShelfDto) {
    return this.storeService.createShelf(createStoreInput, req.user);
  }

  @Post('update-shelf/:shelfId')
  updateShelf(
    @Request() req,
    @Param() param,
    @Body() createStoreInput: UpdateShelfDto,
  ) {
    return this.storeService.updateShelf(
      { createStoreInput, id: param.shelfId },
      req.user,
    );
  }

  @Delete('delete-shelf/:shelfId')
  deleteShelf(@Request() req, @Param() param) {
    return this.storeService.deleteShelf(param.shelfId, req.user);
  }
}
