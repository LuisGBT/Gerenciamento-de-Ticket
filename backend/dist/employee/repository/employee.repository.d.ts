import { PrismaService } from "src/prisma/prisma.service";
import { CreateEmployeeDto } from "../dto/create.employee.dto";
import { UpdateEmployeeDto } from "../dto/update.employee.dto";
import { EmployeeEntity } from "../entities/employeeEntity";
export declare class EmployeeRepository {
    private PrismaService;
    constructor(PrismaService: PrismaService);
    create(CreateEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity>;
    findAll(): Promise<EmployeeEntity[]>;
    findUnique(id: string): Promise<EmployeeEntity>;
    findUniqueCpf(CPF: string): Promise<EmployeeEntity>;
    update(id: string, UpdateEmployeeDto: UpdateEmployeeDto): Promise<{
        id: string;
        name: string;
        CPF: string;
        situation: string;
        changeDate: Date;
    }>;
    delete(id: string): Promise<EmployeeEntity>;
}
