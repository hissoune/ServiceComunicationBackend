import { ChannelDocument } from "../schemas/chanel.schema";
import { ChannelEntity } from '../entities/channel.entity';





export interface  ChanelInetface {

    getAllChanels():Promise<ChannelDocument[]>;

    getChanelById(id:string):Promise<ChannelDocument>;

    createChanel(ChannelEntity:ChannelEntity):Promise<ChannelDocument>;

    updateChanel(id: string,ChannelEntity:ChannelEntity):Promise<ChannelDocument>;

    deleteChanel(ChannelEntity:ChannelEntity):Promise<{msg:string}>; 
   


} 