import {
  CreateBinDto,
  CreateRackDto,
  CreateShelfDto,
  CreateStoreDto,
  UpdateShelfDto,
} from '@database/dtos/store.dto';
import {
  UserRepository,
  StoreRepository,
  BinRepository,
} from '@database/repositories';
import { Injectable } from '@nestjs/common';
import * as Errors from '@errors';
import { UserEntity, UserTypeEnum } from '@database/entities/user.entity';
import { ShelfEntity, StoreEntity } from '@database/entities';
import { ShelfRepository } from '@database/repositories/shelf.repository';
import { RackRepository } from '@database/repositories/rack.repository';
import { v4 as uuidv4 } from 'uuid';

class UpdateShelfInput extends UpdateShelfDto {
  shelfId: string;
}

class UpdateBinInput extends UpdateShelfDto {
  binId: string;
}

class UpdateRackInput extends UpdateShelfDto {
  rackId: string;
}

class UpdateStoreInput extends UpdateShelfDto {
  storeId: string;
}

@Injectable()
export class StoreService {
  constructor(
    private storeRepository: StoreRepository,
    private userRepository: UserRepository,
    private binRepository: BinRepository,
    private shelfRepository: ShelfRepository,
    private rackRepository: RackRepository,
  ) {}

  getAllStores(): Promise<StoreEntity[]> {
    return this.storeRepository.findByAll();
  }

  getStoreById(storeId: string): Promise<StoreEntity> {
    return this.storeRepository.findById(storeId);
  }

  async createStore(createStoreInput: CreateStoreDto, user: UserEntity) {
    const storeManager = await this.userRepository.findById(
      createStoreInput.storeManagerId,
    );
    if (!storeManager) {
      throw new Errors.AssignedStoreManagerNotFound();
    }
    if (user.userType !== UserTypeEnum.ADMIN) {
      throw new Errors.UserPermissionDenied();
    }

    try {
      const storeEntity = new StoreEntity();
      storeEntity.name = createStoreInput.name;
      storeEntity.storeManager = storeManager;
      storeEntity.createdBy = user;
      return this.storeRepository.create(storeManager);
    } catch (error) {
      throw new Errors.ErrorCreatingUser();
    }
  }

  updateStore(storeInput: { id: string; name: string }, user: UserEntity) {
    if (user.userType !== UserTypeEnum.ADMIN) {
      throw new Errors.UserPermissionDenied();
    }
    try {
      return this.storeRepository.update(
        { id: storeInput.id },
        { ...storeInput, updatedBy: user },
      );
    } catch (error) {
      throw new Errors.UpdatedStoreNotFound();
    }
  }

  async changeStoreManager(
    changeStoreManagerInput: { storeId: string; storeManagerId: string },
    user: UserEntity,
  ) {
    const storeManager = await this.userRepository.findById(
      changeStoreManagerInput.storeManagerId,
    );
    if (!storeManager) {
      throw new Errors.AssignedStoreManagerNotFound();
    }

    try {
      return this.storeRepository.update(
        { id: changeStoreManagerInput.storeId },
        { storeManager: storeManager, updatedBy: user },
      );
    } catch (error) {
      throw new Errors.UpdatedStoreNotFound();
    }
  }

  async verifyUserPermissionsForstore(storeId: string, user: UserEntity) {
    if (user.userType === UserTypeEnum.AGENT) {
      throw new Errors.UserPermissionDenied();
    }
    if (user.userType === UserTypeEnum.STORE_KEEPER) {
      const store: StoreEntity = await this.getStoreById(storeId);
      if (store.storeManager.id !== user.id)
        throw new Errors.UserPermissionDenied();
    }
  }

  async getStoreShelves(storeId: string, user: UserEntity) {
    await this.verifyUserPermissionsForstore(storeId, user);
    return this.shelfRepository.find({ where: { store: { id: storeId } } });
  }

  async createShelf(createShelfInput: CreateShelfDto, user: UserEntity) {
    await this.verifyUserPermissionsForstore(createShelfInput.storeId, user);
    const shelfEntity: ShelfEntity = new ShelfEntity();
    shelfEntity.barcode = uuidv4();
    shelfEntity.number = createShelfInput.number;
    shelfEntity.store = await this.getStoreById(createShelfInput.storeId);
    return this.shelfRepository.create(shelfEntity);
  }

  updateShelf(updateShelfInput: UpdateShelfInput, user: any) {
    throw new Error('Method not implemented.');
  }

  deleteShelf(shelfId: string, user: string) {
    throw new Error('Method not implemented.');
  }

  createRack(createRackInput: CreateRackDto, user: UserEntity) {
    throw new Error('Method not implemented.');
  }

  updateRack(updateRackInput: UpdateRackInput, user: any) {
    throw new Error('Method not implemented.');
  }

  deleteRack(shelfId: string, user: string) {
    throw new Error('Method not implemented.');
  }

  createBin(createBinInput: CreateBinDto, user: UserEntity) {
    throw new Error('Method not implemented.');
  }

  updateBin(updateBinInput: UpdatebinInput, user: any) {
    throw new Error('Method not implemented.');
  }

  deleteBin(binId: string, user: string) {
    throw new Error('Method not implemented.');
  }
}
