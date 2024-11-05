import { Module } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';
import { ChanelImplementations } from './repository/chanel.implentations';
import { MongooseModule } from '@nestjs/mongoose';
import { ChannelSchema } from './schemas/chanel.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Channel', schema: ChannelSchema }]),

  ],
  controllers: [ChannelsController],
  providers: [ChannelsService,ChanelImplementations],
})
export class ChannelsModule {}
