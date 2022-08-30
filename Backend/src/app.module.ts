import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import CassandraModule from '@cass/cassandra.module';
import DataModule from '@data/data.module';
@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}) ,CassandraModule,DataModule]
})
export class AppModule {}
