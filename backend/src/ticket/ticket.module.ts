import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TicketRepository } from './repository/ticket.repository';

@Module({
  providers: [TicketService, PrismaService, TicketRepository],
  controllers: [TicketController]
})
export class TicketModule {}
