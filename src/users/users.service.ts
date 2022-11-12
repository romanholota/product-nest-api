import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { FindOptions } from 'sequelize';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService implements OnModuleInit {

    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {
    }

    async onModuleInit(): Promise<void> {

        const adminExists = await this.userModel.count({
            where: {
                mail: 'admin@product-nest.com'
            }
        });

        if (adminExists) {
            return;
        }

        await this.create({
            mail: 'admin@product-nest.com',
            password: 'nest'
        });

    }

    findOne(query?: FindOptions) {
        return this.userModel.findOne(query);
    }

    async create(createUserDto: any) {

        const {password, ...userData} = createUserDto;
        const hash = await bcrypt.hash(password, 10);

        await this.userModel.create({hash, ...userData});

    }

}
