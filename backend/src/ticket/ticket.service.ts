import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TicketRepository } from './repository/ticket.repository';
import { CreateTicketDto } from './dto/create.ticket.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { TicketEntity } from './entities/ticket.entity';

@Injectable()
export class TicketService {
    constructor(private TicketRepository: TicketRepository, private EmployeeService: EmployeeService){}

    async create(CreateTicketDto: CreateTicketDto){

        try {
            let res = await this.EmployeeService.findUnique(CreateTicketDto.employeeId);

            if(res == null){throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);}

            return this.TicketRepository.create({
                quantity: CreateTicketDto.quantity,
                employeeId: CreateTicketDto.employeeId
            });

        } catch (error) {
           throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }


    async findUnique(id: string){
        try {
            return this.TicketRepository.findUnique(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        } 

    }

    async findAll(){
        try {
            const res = await this.TicketRepository.findAll();
            console.log(res);
            return res;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
