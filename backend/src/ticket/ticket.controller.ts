import { Controller, Post, Body } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create.ticket.dto';

@Controller('ticket')
export class TicketController {

    constructor(private readonly TicketService: TicketService){}

   @Post('create')
   async create(@Body() CreateTicketDto: CreateTicketDto){
        return this.TicketService.create(CreateTicketDto);
   }

}
