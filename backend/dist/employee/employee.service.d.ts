import { EmployeeRepository } from './repository/employee.repository';
import { CreateEmployeeDto } from './dto/create.employee.dto';
import { UpdateEmployeeDto } from './dto/update.employee.dto';
export declare class EmployeeService {
    private EmployeeRepository;
    constructor(EmployeeRepository: EmployeeRepository);
    create(CreateEmployeeDto: CreateEmployeeDto): Promise<import("./entities/employeeEntity").EmployeeEntity>;
    findAll(): Promise<import("./entities/employeeEntity").EmployeeEntity[]>;
    findUnique(id: string): Promise<import("./entities/employeeEntity").EmployeeEntity>;
    update(id: string, UpdateEmployeeDto: UpdateEmployeeDto): Promise<{
        name: string;
        CPF: string;
        situation: string;
        id: string;
        changeDate: Date;
    }>;
    delete(id: string): Promise<import("./entities/employeeEntity").EmployeeEntity>;
}
