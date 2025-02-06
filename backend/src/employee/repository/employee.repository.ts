import { PrismaService } from "src/prisma/prisma.service";
import { CreateEmployeeDto } from "../dto/create.employee.dto";
import { Injectable } from "@nestjs/common";
import { UpdateEmployeeDto } from "../dto/update.employee.dto";
import { EmployeeEntity } from "../entities/employeeEntity";

@Injectable()
export class EmployeeRepository {
    constructor(private  PrismaService: PrismaService){}

    async create(CreateEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity>{
        return this.PrismaService.employee.create({data:  CreateEmployeeDto});
    }

    async findAll(): Promise<EmployeeEntity[]>{
        return this.PrismaService.employee.findMany();
    }

    async findUnique(id: string): Promise<EmployeeEntity>{
        return await this.PrismaService.employee.findUnique({where: {id}});
    }
    
    async findUniqueCpf(CPF: string): Promise<EmployeeEntity>{
        return await this.PrismaService.employee.findUnique({where:{CPF}})
    }

    async update(id: string, UpdateEmployeeDto: UpdateEmployeeDto){
        const employee = await this.PrismaService.employee.findUnique({where: {id}})

        if (!employee) {
            throw new Error('Employee not found');
          }

        await this.PrismaService.employee.update({where: {id}, data: UpdateEmployeeDto})
        return this.PrismaService.employee.findUnique({ where: { id } });

    }

    async delete(id: string): Promise<EmployeeEntity>{
        return await this.PrismaService.employee.delete({where: {id}});
    }
}