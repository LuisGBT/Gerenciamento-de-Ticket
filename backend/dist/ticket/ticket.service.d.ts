import { TicketRepository } from './repository/ticket.repository';
import { CreateTicketDto } from './dto/create.ticket.dto';
export declare class TicketService {
    private TicketRepository;
    constructor(TicketRepository: TicketRepository);
    create(CreateTicketDto: CreateTicketDto): Promise<import("./entities/ticket.entity").TicketEntity>;
}
