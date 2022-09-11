import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import CassandraModule from '@cass/cassandra.module';
import DataModule from '@data/data.module';
import { EventModule } from '@event/event.module';
import { AuthModule } from '@auth/auth.module';
@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}) ,CassandraModule,DataModule,EventModule, AuthModule]
})
export class AppModule {}
