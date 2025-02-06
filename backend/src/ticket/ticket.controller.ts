import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create.ticket.dto';

@Controller('ticket')
export class TicketController {

    constructor(private readonly TicketService: TicketService){}

   @Post('create')
   async create(@Body() CreateTicketDto: CreateTicketDto){
        return  await this.TicketService.create(CreateTicketDto);
   }

   @Get(':id')
   async findUnique(@Param('id') id: string){
      let res =  await this.TicketService.findUnique(id);
      return res;
   }

   @Get('findall')
   async findAll(){
     let res = await this.TicketService.findAll();
     console.log(res);
     return res;
   }

}
