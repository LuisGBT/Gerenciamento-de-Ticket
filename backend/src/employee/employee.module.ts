import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeRepository } from './repository/employee.repository';

@Module({
  providers: [EmployeeService, PrismaService, EmployeeRepository],
  controllers: [EmployeeController],
  exports: [EmployeeService, EmployeeRepository]
})
export class EmployeeModule {}
