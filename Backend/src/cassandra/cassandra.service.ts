import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, mapping } from 'cassandra-driver';

@Injectable()
export class CassandraService {
    constructor(private configService: ConfigService) {}
    client: Client;
    mapper: mapping.Mapper;
    private createClient() {
        this.client = new Client({
            cloud:{
                secureConnectBundle: "src/data/secure-connect-vmess.zip"
            },
            credentials:{
                username: this.configService.get("CLIENT_ID")!,
                password: this.configService.get("CLIENT_SECRET")!
            },
            keyspace: this.configService.get("CLIENT_KEYSPACE")
        });
    }
    
    createMapper(mappingOptions: mapping.MappingOptions) {
     if(this.client == undefined) {
         this.createClient();
     }   
     return new mapping.Mapper(this.client, mappingOptions);
    }
}