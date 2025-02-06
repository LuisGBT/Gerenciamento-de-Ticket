import { PrismaService } from "src/prisma/prisma.service";
import { CreateTicketDto } from "../dto/create.ticket.dto";
import { TicketEntity } from "../entities/ticket.entity";
import { UpdateTicketDto } from "../dto/update.ticket.dto";
export declare class TicketRepository {
    private PrismaService;
    constructor(PrismaService: PrismaService);
    create(CreateTicketDto: CreateTicketDto): Promise<TicketEntity>;
    update(id: string, UpdateTicketDto: UpdateTicketDto): Promise<TicketEntity>;
    findUnique(id: string): Promise<TicketEntity>;
    findAll(): Promise<TicketEntity[]>;
    delete(id: string): Promise<TicketEntity>;
}
