import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateEquipmentDto,
  CreateEquipmentModelDto,
  UpdateEquipmentDto,
  UpdateEquipmentModelDto,
} from '@database/dtos/equipment.dto';
import { EquipmentEntity } from '@database/entities/equipment.entity';

@Controller('equipment')
@ApiTags('equipment')
@UseGuards(JwtAuthGuard)
export class EquipmentController {
  constructor(private equipmentService: EquipmentService) {}

  @Get('models/all')
  getEquipmentModel() {
    return this.equipmentService.getAllEquipmentModels();
  }

  @Get('model/:equipmentModelId')
  getEquipmentModelById(@Param() params) {
    return this.equipmentService.getEquipmentModelById(params.equipmentModelId);
  }

  @Post('model/create')
  createEquipmentModel(
    @Request() req,
    @Body() createEquipmentModelInput: CreateEquipmentModelDto,
  ) {
    return this.equipmentService.createEquipmentModel(
      createEquipmentModelInput,
      req.user,
    );
  }

  @Put('model/update/:equipmentId')
  updateEquipmentModel(
    @Request() req,
    @Param() params,
    @Body() updateEquipmentModelInput: UpdateEquipmentModelDto,
  ) {
    return this.equipmentService.updateEquipmentModel(
      { ...updateEquipmentModelInput, equipmentModelId: params.equipmentId },
      req.user,
    );
  }

  @Delete('model/delete/:equipmentId')
  deleteEquipmentModel(@Request() req, @Param() params) {
    return this.equipmentService.deleteEquipmentModel(
      params.equipmentId,
      req.user,
    );
  }

  @Get('all')
  getAllEquipment() {
    return this.equipmentService.getAllEquipment();
  }

  @Get(':equipmentId')
  getEquipmentId(@Param() params) {
    return this.equipmentService.getEquipmentById(params.equipmentId);
  }

  @Post('create')
  createEquipment(
    @Request() req,
    @Body() createEquipmentInput: CreateEquipmentDto,
  ) {
    return this.equipmentService.createEquipment(
      createEquipmentInput,
      req.user,
    );
  }

  @Put('update/:equipmentId')
  updateEquipment(
    @Request() req,
    @Param() params,
    @Body() updateEquipmentInput: UpdateEquipmentDto,
  ) {
    return this.equipmentService.updateEquipment(
      { ...updateEquipmentInput, equipmentId: params.equipmentId },
      req.user,
    );
  }

  @Delete('delete/:equipmentId')
  deleteEquipment(@Request() req, @Param() params) {
    return this.equipmentService.deleteEquipment(params.equipmentId, req.user);
  }
}
