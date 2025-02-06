import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create.ticket.dto';
export declare class TicketController {
    private readonly TicketService;
    constructor(TicketService: TicketService);
    create(CreateTicketDto: CreateTicketDto): Promise<import("./entities/ticket.entity").TicketEntity>;
}
