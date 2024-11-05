import { BadRequestException, Body, Controller, Param, Patch, Post } from "@nestjs/common";
import { ChannelsService } from './channels.service';
import { ChannelDocument } from "./schemas/chanel.schema";
import { ChannelEntity } from "./entities/channel.entity";
import { Types } from "mongoose";



@Controller('chanels')

export class  ChannelsController {

    constructor(private readonly chanelService:ChannelsService) { }


    @Post('create')
    createChanel(@Body()
    body: {
      name?: string;
      type?: string;
      ownerId?: string;
      members?: string[];
      moderators?: string[];
      bannedWords?: string[];
     
    } ): Promise<ChannelDocument>{
        if (!Types.ObjectId.isValid(body.ownerId)) {
            throw new BadRequestException('Invalid ownerId');
        }
        if (body.members && !body.members.every(id => Types.ObjectId.isValid(id))) {
            throw new BadRequestException('Invalid memberId in members');
        }
        if (body.moderators && !body.moderators.every(id => Types.ObjectId.isValid(id))) {
            throw new BadRequestException('Invalid moderatorId in moderators');
        }
     const ChanelEntity = new  ChannelEntity(
        body.name,
        body.type,
        body.ownerId,
        body.members,
        body.moderators,
        body.bannedWords
     );
     return this.chanelService.createChanel(ChanelEntity);
        
    }


    @Patch('update/:id')
    updateChanel(
      @Param('id') id: string,
      @Body() body: { 
        name?: string; 
        type?: string; 
        ownerId?: string;
        members?: string[];
        moderators?: string[];
        bannedWords?: string[];
      }
    ): Promise<ChannelDocument> {
        if (body.ownerId && !Types.ObjectId.isValid(body.ownerId)) {
            throw new BadRequestException('Invalid ownerId');
        }
        if (body.members && !body.members.every(id => Types.ObjectId.isValid(id))) {
            throw new BadRequestException('Invalid memberId in members');
        }
        if (body.moderators && !body.moderators.every(id => Types.ObjectId.isValid(id))) {
            throw new BadRequestException('Invalid moderatorId in moderators');
        }
      const ChanelEntity = new ChannelEntity(
        body.name,
        body.type,
        body.ownerId,
        body.members,
        body.moderators,
        body.bannedWords
      );
    
      return this.chanelService.updateChanel(id, ChanelEntity);
    }
    


}

