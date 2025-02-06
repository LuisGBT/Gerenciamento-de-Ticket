import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from "../dto/create.ticket.dto";
import { TicketEntity } from "../entities/ticket.entity";

@Injectable()
export class TicketRepository {
    constructor(private PrismaService: PrismaService){}

    async create(CreateTicketDto: CreateTicketDto): Promise<TicketEntity>{
        return await this.PrismaService.ticket.create({
                    data: {
                        quantity: CreateTicketDto.quantity,
                        employee: {
                            connect: {id: CreateTicketDto.employeeId}
                                  }
                          } 
             });
        }  
        
    async findUnique(id: string): Promise<TicketEntity>{
        return await this.PrismaService.ticket.findUnique({where: {id}});
    }

    async findAll(): Promise<TicketEntity[]>{
        return await this.PrismaService.ticket.findMany();
        
    }
}
