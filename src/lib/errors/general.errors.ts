import { HttpException, HttpStatus } from '@nestjs/common';

const USER_PERMISSION_DENIED = 'USER_PERMISSION_DENIED';

export class UserPermissionDenied extends HttpException {
  constructor() {
    super(USER_PERMISSION_DENIED, HttpStatus.UNAUTHORIZED);
  }
}
