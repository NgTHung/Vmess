import { ConfigService } from '@nestjs/config';
import { Client, mapping } from 'cassandra-driver';
export declare class CassandraService {
    private configService;
    constructor(configService: ConfigService);
    client: Client;
    mapper: mapping.Mapper;
    private createClient;
    createMapper(mappingOptions: mapping.MappingOptions): mapping.Mapper;
}
