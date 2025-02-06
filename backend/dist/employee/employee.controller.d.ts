import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create.employee.dto';
import { EmployeeEntity } from './entities/employeeEntity';
import { UpdateEmployeeDto } from './dto/update.employee.dto';
export declare class EmployeeController {
    private EmployeeService;
    constructor(EmployeeService: EmployeeService);
    create(CreateEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity>;
    findAll(): Promise<EmployeeEntity[]>;
    FindUnique(id: string): Promise<EmployeeEntity>;
    update(id: string, UpdateEmployeeDto: UpdateEmployeeDto): Promise<{
        name: string;
        CPF: string;
        situation: string;
        id: string;
        changeDate: Date;
    }>;
    delete(id: string): Promise<EmployeeEntity>;
}
