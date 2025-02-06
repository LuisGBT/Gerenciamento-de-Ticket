import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TicketRepository } from './repository/ticket.repository';
import { CreateTicketDto } from './dto/create.ticket.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { TicketEntity } from './entities/ticket.entity';
import { UpdateTicketDto } from './dto/update.ticket.dto';

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



    async update(id: string, UpdateTicketDto: UpdateTicketDto){

        try {
            let res = await this.TicketRepository.findUnique(id);

            if(res == null){throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);}

            return this.TicketRepository.update(id, UpdateTicketDto);

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
            return await this.TicketRepository.findAll();

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id: string){
          let res =  await this.TicketRepository.delete(id);
          return res;
       }
}
