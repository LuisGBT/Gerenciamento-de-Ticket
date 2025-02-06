import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { PrismaService } from '../prisma/prisma.service';
import { TicketRepository } from './repository/ticket.repository';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [EmployeeModule],
  providers: [TicketService, PrismaService,TicketRepository],
  controllers: [TicketController]
})
export class TicketModule {}
