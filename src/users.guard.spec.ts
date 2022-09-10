import { UsersGuard } from './users/users.guard';

describe('UsersGuard', () => {
  it('should be defined', () => {
    expect(new UsersGuard()).toBeDefined();
  });
});
