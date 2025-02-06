import { PrismaService } from "src/prisma/prisma.service";
import { CreateTicketDto } from "../dto/create.ticket.dto";
import { TicketEntity } from "../entities/ticket.entity";
export declare class TicketRepository {
    private PrismaService;
    constructor(PrismaService: PrismaService);
    create(CreateTicketDto: CreateTicketDto): Promise<TicketEntity>;
}
