import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create.ticket.dto';
import { UpdateTicketDto } from './dto/update.ticket.dto';


@Controller('ticket')
export class TicketController {

    constructor(private readonly TicketService: TicketService){}

   @Post('create')
   async create(@Body() CreateTicketDto: CreateTicketDto){
        return  await this.TicketService.create(CreateTicketDto);
   }

   @Patch('update/:id')
   async update(@Param('id') id: string, @Body() UpdateTicketDto: UpdateTicketDto){
        return  await this.TicketService.update(id, UpdateTicketDto);
   }

   @Get(':id')
   async findUnique(@Param('id') id: string){
      let res =  await this.TicketService.findUnique(id);
      return res;
   }

   @Get('find/all')
   async findAll(){
     let res = await this.TicketService.findAll();
     return res;
   }

   @Delete('delete/:id')
   async delete(@Param('id') id: string){
      let res =  await this.TicketService.delete(id);
      return res;
   }

}
