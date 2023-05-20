import { CreateStoreDto } from '@database/dtos/store.dto';
import { UserRepository, StoreRepository } from '@database/repositories';
import { Injectable } from '@nestjs/common';
import * as Errors from '@errors';
import StoreEntity from '@database/entities/store.entity';
import { UserTypeEnum } from '@database/entities/user.entity';

@Injectable()
export class StoreService {
  constructor(
    private storeRepository: StoreRepository,
    private userRepository: UserRepository,
  ) {}

  getAllStores() {
    return this.storeRepository.findByAll();
  }

  getStoreById(storeId: string) {
    this.storeRepository.findById(storeId);
  }

  async createStore(createStoreInput: CreateStoreDto, userId: string) {
    const storeManager = await this.userRepository.findById(
      createStoreInput.storeManagerId,
    );
    if (!storeManager) {
      throw new Errors.AssignedStoreManagerNotFound();
    }
    const user = await this.userRepository.findById(userId);
    if (user.userType !== UserTypeEnum.ISSUER) {
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

  updateStore(storeInput: { id: string; name: string }, storeId: string) {
    try {
      return this.storeRepository.update({ id: storeId }, { ...storeInput });
    } catch (error) {
      throw new Errors.UpdatedStoreNotFound();
    }
  }

  async changeStoreManager(
    changeStoreManagerInput: { storeId: string; storeManagerId: string },
    userId: string,
  ) {
    const user = await this.userRepository.findById(userId);
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

}
