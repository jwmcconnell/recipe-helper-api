import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(token: string): Promise<any> {
    const user = this.jwtService.verify(token);
    if (user) {
      return user;
    }
    return null;
  }
}
