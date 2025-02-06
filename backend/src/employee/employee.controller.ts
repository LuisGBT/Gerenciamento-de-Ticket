import { Controller, Post, Body, Get, Param, HttpException, HttpStatus, Patch, Query, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create.employee.dto';
import { EmployeeEntity } from './entities/employeeEntity';
import { UpdateEmployeeDto } from './dto/update.employee.dto';

@Controller('employee')
export class EmployeeController {
    constructor(private EmployeeService: EmployeeService){}

    @Post('create')
    async create(@Body() CreateEmployeeDto: CreateEmployeeDto){
        return this.EmployeeService.create(CreateEmployeeDto);
    }

    @Get('find/all')
    async findAll(){
        const findAllEmployee = await this.EmployeeService.findAll();
        return findAllEmployee
    }

    @Get(':id')
    async FindUnique(@Param('id') id: string){
        const findUniqueEmployee = await this.EmployeeService.findUnique(id);
        return findUniqueEmployee
    }


    @Patch('update/:id')
    async update(@Param('id') id: string, @Body() UpdateEmployeeDto: UpdateEmployeeDto ){
        return this.EmployeeService.update(id, UpdateEmployeeDto);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: string){
        return this.EmployeeService.delete(id)
    }

           
}

