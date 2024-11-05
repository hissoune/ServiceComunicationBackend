import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Comunications'),
    ChannelsModule,

    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
    
}