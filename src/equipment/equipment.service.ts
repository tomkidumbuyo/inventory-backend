import {
  CreateEquipmentDto,
  CreateEquipmentModelDto,
  UpdateEquipmentDto,
  UpdateEquipmentModelDto,
} from '@database/dtos/equipment.dto';
import {
  UserEntity,
  EquipmentTypeEntity,
  UserTypeEnum,
  EquipmentEntity,
  BinEntity,
  StoreEntity,
} from '@database/entities';
import {
  EquipmentTypeRepository,
  EquipmentRepository,
  StoreRepository,
  BinRepository,
} from '@database/repositories';
import { Injectable } from '@nestjs/common';
import * as Errors from '@errors';

class UpdateEquipmentModelInputType extends UpdateEquipmentModelDto {
  equipmentModelId: string;
}

class UpdateEquipmentInputType extends UpdateEquipmentDto {
  equipmentId: string;
}

@Injectable()
export class EquipmentService {
  constructor(
    private equipmentRepository: EquipmentRepository,
    private equipmentTypeRepository: EquipmentTypeRepository,
    private binRepository: BinRepository,
    private storeRepository: StoreRepository,
  ) {}

  getAllEquipmentModels() {
    return this.equipmentTypeRepository.find();
  }

  getEquipmentModelById(equipmentModelId: string) {
    try {
      return this.equipmentTypeRepository.findById(equipmentModelId);
    } catch (error) {
      throw new Errors.EquipmentTypeDoesNotExist();
    }
  }

  createEquipmentModel(
    createEquipmentModelInput: CreateEquipmentModelDto,
    user: UserEntity,
  ) {
    if (user.userType == UserTypeEnum.ADMIN) {
      const equipmentTypeEntity: EquipmentTypeEntity =
        new EquipmentTypeEntity();
      equipmentTypeEntity.modelName = createEquipmentModelInput.modelName;
      equipmentTypeEntity.description = createEquipmentModelInput.description;
      equipmentTypeEntity.height = createEquipmentModelInput.height;
      equipmentTypeEntity.length = createEquipmentModelInput.length;
      equipmentTypeEntity.width = createEquipmentModelInput.width;
      equipmentTypeEntity.weight = createEquipmentModelInput.weight;
      equipmentTypeEntity.createdBy = user;
      this.equipmentTypeRepository.create(equipmentTypeEntity);
    }
    throw new Errors.UserPermissionDenied();
  }

  updateEquipmentModel(
    updateEquipmentModelInputType: UpdateEquipmentModelInputType,
    user: UserEntity,
  ) {
    if (user.userType == UserTypeEnum.ADMIN) {
      const equipmentId = updateEquipmentModelInputType.equipmentModelId;
      delete updateEquipmentModelInputType.equipmentModelId;
      return this.equipmentTypeRepository.update(
        { id: equipmentId },
        { ...updateEquipmentModelInputType },
      );
    }
    throw new Errors.UserPermissionDenied();
  }

  deleteEquipmentModel(equipmentId: string, user: UserEntity) {
    if (user.userType == UserTypeEnum.ADMIN) {
      this.equipmentTypeRepository.softDelete(equipmentId);
    }
  }

  getAllEquipment() {
    return this.equipmentRepository.findByAll();
  }

  getEquipmentById(equipmentId: any) {
    return this.equipmentRepository.findById(equipmentId);
  }

  async createEquipmentInputVerification(
    createEquipmentInput: CreateEquipmentDto,
  ) {
    const equipmentTypeEntity: EquipmentTypeEntity =
      await this.equipmentTypeRepository.findById(
        createEquipmentInput.equipmentTypeId,
      );
    if (!equipmentTypeEntity) {
      throw new Errors.EquipmentTypeDoesNotExist();
    }
    const binEntity: BinEntity = await this.binRepository.findById(
      createEquipmentInput.binId,
    );
    if (!binEntity) {
      throw new Errors.BinDoesNotExist();
    }

    const storeEntity: StoreEntity = await this.storeRepository.findById(
      createEquipmentInput.storeId,
    );
    if (!storeEntity) {
      throw new Errors.StoreDoesNotExist();
    }

    return [equipmentTypeEntity, binEntity, storeEntity] as const;
  }

  async createEquipment(
    createEquipmentInput: CreateEquipmentDto,
    user: UserEntity,
  ) {
    const [equipmentTypeEntity, binEntity, storeEntity] =
      await this.createEquipmentInputVerification(createEquipmentInput);
    if (user.userType !== UserTypeEnum.ADMIN) {
      throw new Errors.UserPermissionDenied();
    }
    const equipmentEntity: EquipmentEntity = new EquipmentEntity();
    equipmentEntity.serialNumber = createEquipmentInput.serialNumber;
    equipmentEntity.purchaseDate = createEquipmentInput.purchaseDate;
    equipmentEntity.equipmentType = equipmentTypeEntity;
    equipmentEntity.bin = binEntity;
    equipmentEntity.store = storeEntity;
    this.equipmentRepository.save(equipmentEntity);
  }

  updateEquipment(
    updateEquipmentInput: UpdateEquipmentInputType,
    user: UserEntity,
  ) {
    if (user.userType == UserTypeEnum.ADMIN) {
      const equipmentId = updateEquipmentInput.equipmentId;
      delete updateEquipmentInput.equipmentId;
      this.equipmentRepository.update(
        { id: equipmentId },
        { ...updateEquipmentInput },
      );
    }
    throw new Errors.UserPermissionDenied();
  }

  deleteEquipment(equipmentId: string, user: UserEntity) {
    if (user.userType == UserTypeEnum.ADMIN) {
      this.equipmentRepository.softDelete(equipmentId);
    }
    throw new Errors.UserPermissionDenied();
  }
}
