import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EmployeeRepository } from './repository/employee.repository';
import { CreateEmployeeDto } from './dto/create.employee.dto';
import { UpdateEmployeeDto } from './dto/update.employee.dto';

@Injectable()
export class EmployeeService {
    
    constructor(private EmployeeRepository: EmployeeRepository){}

    async create(CreateEmployeeDto: CreateEmployeeDto){

        try {

            if(CreateEmployeeDto.situation === "inactive"){
                throw new HttpException('situation cannot start with inactive', HttpStatus.UNAUTHORIZED);
              }

             let res = await this.EmployeeRepository.findUniqueCpf(CreateEmployeeDto.CPF);

             if(res !== null ){
                throw new HttpException('CPF already existing in the system', HttpStatus.FORBIDDEN)
             }

             return this.EmployeeRepository.create({
                name: CreateEmployeeDto.name,
                CPF: CreateEmployeeDto.CPF,
                situation: CreateEmployeeDto.situation,
            });
              
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }    
    };

    async findAll(){
        try {
            return this.EmployeeRepository.findAll();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
        
    }

    async findUnique(id: string){
        try {
            return this.EmployeeRepository.findUnique(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }  
    }

    async update(id: string, UpdateEmployeeDto:UpdateEmployeeDto){
        try {

            const res = await this.EmployeeRepository.findUnique(id);
            if(res == null){throw new HttpException('non-existent user', HttpStatus.BAD_REQUEST)}
            return this.EmployeeRepository.update(id, UpdateEmployeeDto)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }    
    }

    async delete(id: string){
        const res = await this.EmployeeRepository.findUnique(id);

        if(res == null){
            throw new HttpException('non-existent user', HttpStatus.BAD_REQUEST);
        }
        return this.EmployeeRepository.delete(id);
    }

}
