import { UserRepository } from './user.repository';
import { StoreRepository } from './store.repository';

export const repositories = [UserRepository, StoreRepository];

export * from './user.repository';
export * from './store.repository';
