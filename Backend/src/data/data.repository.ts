import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { mapping, types } from 'cassandra-driver';
import  User  from '@data/data.entity';
import { CassandraService } from '@cass/cassandra.service';

@Injectable()
export class UserRepository implements OnModuleInit {

    constructor(private cassandraService: CassandraService) { }
    private readonly logger = new Logger(UserRepository.name);
    userMapper: mapping.ModelMapper<User>;

    async onModuleInit() {
        const mappingOptions: mapping.MappingOptions = {
            models: {
                'User': {
                    tables: ['user'],
                    mappings: new mapping.UnderscoreCqlToCamelCaseMappings
                }
            }
        }
        this.userMapper = this.cassandraService.createMapper(mappingOptions).forModel('User');
        await this.cassandraService.client.connect().then((v) => {this.logger.log("Sucessfully connected Cassandradb")}).catch((e)=>{this.logger.error(`ERROR when connect Cassandradb: ${e}`)})
    }

    async getUser() {
        return (await this.userMapper.findAll()).toArray();
    }

    async getUserById(id: types.Uuid) {
        return (await this.userMapper.find({ id: id}));
    }

   async getUserByName(username: string) {
        return (await this.userMapper.find({username: username})).toArray()
   }

    async createUser(user: User) {
        return (await this.userMapper.insert(user)).toArray();
    }
}