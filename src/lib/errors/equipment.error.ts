import { HttpException, HttpStatus } from '@nestjs/common';

const EQUIPMENT_TYPE_DOES_NOT_EXIST = 'EQUIPMENT_TYPE_DOES_NOT_EXIST';
const BIN_DOES_NOT_EXIST = 'BIN_DOES_NOT_EXIST';
const STORE_DOES_NOT_EXIST = 'STORE_DOES_NOT_EXIST';

export class EquipmentTypeDoesNotExist extends HttpException {
  constructor() {
    super(EQUIPMENT_TYPE_DOES_NOT_EXIST, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class BinDoesNotExist extends HttpException {
  constructor() {
    super(BIN_DOES_NOT_EXIST, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class StoreDoesNotExist extends HttpException {
  constructor() {
    super(STORE_DOES_NOT_EXIST, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
