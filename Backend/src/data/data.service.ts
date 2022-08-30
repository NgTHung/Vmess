import { Injectable } from '@nestjs/common';
import { UserRepository } from '@data/data.repository';
import User from '@data/data.entity';

@Injectable()
export class UserService {

    constructor(private userRepository: UserRepository) { }

    async getUser() {
        return this.userRepository.getUser();
    }

    async getUserById(id: number) {
        return this.userRepository.getUserById(id);
    }

    async createUser(employee: User) {
        return this.userRepository.createUser(employee);
    }
}