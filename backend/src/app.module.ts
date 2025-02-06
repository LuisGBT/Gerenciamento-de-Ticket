import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [EmployeeModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
