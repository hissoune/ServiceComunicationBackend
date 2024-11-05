import { Injectable } from "@nestjs/common";
import { ChanelImplementations } from './repository/chanel.implentations';
import { ChannelDocument } from "./schemas/chanel.schema";
import { ChannelEntity } from "./entities/channel.entity";



@Injectable()
export class ChannelsService {

constructor(
    private readonly ChanelImplementations:ChanelImplementations
){}


getAllChanels(): Promise<ChannelDocument[]> {
    return ;
}

getChanelById(id: string): Promise<ChannelDocument> {
    return;
}


createChanel(ChannelEntity: ChannelEntity): Promise<ChannelDocument> {
    return this.ChanelImplementations.createChanel(ChannelEntity);
}


updateChanel(id: string, ChannelEntity: ChannelEntity): Promise<ChannelDocument> {
    return this.ChanelImplementations.updateChanel(id, ChannelEntity);
  }

deleteChanel(ChannelEntity: ChannelEntity): Promise<{ msg: string; }> {
    return;
}



}