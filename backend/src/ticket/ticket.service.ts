import { Injectable } from '@nestjs/common';
import { TicketRepository } from './repository/ticket.repository';
import { CreateTicketDto } from './dto/create.ticket.dto';

@Injectable()
export class TicketService {
    constructor(private TicketRepository: TicketRepository){}

    async create(CreateTicketDto: CreateTicketDto){
        return this.TicketRepository.create({
            quantity: CreateTicketDto.quantity,
            employeeId: CreateTicketDto.employeeId
        });
    }
}
