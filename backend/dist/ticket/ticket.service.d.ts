import { TicketRepository } from './repository/ticket.repository';
import { CreateTicketDto } from './dto/create.ticket.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { TicketEntity } from './entities/ticket.entity';
export declare class TicketService {
    private TicketRepository;
    private EmployeeService;
    constructor(TicketRepository: TicketRepository, EmployeeService: EmployeeService);
    create(CreateTicketDto: CreateTicketDto): Promise<TicketEntity>;
    findUnique(id: string): Promise<TicketEntity>;
    findAll(): Promise<TicketEntity[]>;
}
