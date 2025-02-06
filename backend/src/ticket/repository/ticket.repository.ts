import { PrismaService } from "src/prisma/prisma.service";
import { CreateTicketDto } from "../dto/create.ticket.dto";
import { TicketEntity } from "../entities/ticket.entity";
import { connect } from "http2";

export class TicketRepository {
    constructor(private PrismaService: PrismaService){}

    async create(CreateTicketDto: CreateTicketDto): Promise<TicketEntity>{
        return this.PrismaService.ticket.create({
            data: {
                quantity: CreateTicketDto.quantity,
                employee: {
                    connect: {id: CreateTicketDto.employeeId}
                }
            }
        });
    }
}