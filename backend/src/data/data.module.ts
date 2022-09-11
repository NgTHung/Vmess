import { Module } from "@nestjs/common";
import CassandraModule from "@cass/cassandra.module";
import UserController from "@data/data.controller";
import { UserRepository } from "@data/data.repository";
import { UserService } from "@data/data.service";

@Module({
    imports: [CassandraModule],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserRepository, UserService]
})
export default class DataModule { }