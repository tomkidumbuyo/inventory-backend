import { HttpException, HttpStatus } from '@nestjs/common';

const ASSIGNED_STORE_MANAGER_NOT_FOUND = 'ASSIGNED_STORE_MANAGER_NOT_FOUND';
const UPDATED_STORE_NOT_FOUND = 'UPDATED_STORE_NOT_FOUND';
const ERROR_CREATING_USER = 'ERROR_CREATING_USER';

export class AssignedStoreManagerNotFound extends HttpException {
  constructor() {
    super(ASSIGNED_STORE_MANAGER_NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class UpdatedStoreNotFound extends HttpException {
  constructor() {
    super(UPDATED_STORE_NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class ErrorCreatingUser extends HttpException {
  constructor() {
    super(ERROR_CREATING_USER, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
