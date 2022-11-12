import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

	constructor(
		private usersService: UsersService,
		private jwtService: JwtService
	) {}

	async validateUser(username: string, password: string): Promise<any> {

		const user = await this.usersService.findOne({
			where: {
				mail: username
			}
		});

		if (user && await bcrypt.compare(password, user.hash)) {
			const { hash, ...result } = user;
			return result;
		}

		return null;

	}

	async login(user: any) {
		const payload = { username: user.username, sub: user.id };
		return {
			accessToken: this.jwtService.sign(payload),
		};
	}

}
