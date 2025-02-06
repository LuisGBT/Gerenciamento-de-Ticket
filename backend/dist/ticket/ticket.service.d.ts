import { TicketRepository } from './repository/ticket.repository';
import { CreateTicketDto } from './dto/create.ticket.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { TicketEntity } from './entities/ticket.entity';
import { UpdateTicketDto } from './dto/update.ticket.dto';
export declare class TicketService {
    private TicketRepository;
    private EmployeeService;
    constructor(TicketRepository: TicketRepository, EmployeeService: EmployeeService);
    create(CreateTicketDto: CreateTicketDto): Promise<TicketEntity>;
    update(id: string, UpdateTicketDto: UpdateTicketDto): Promise<TicketEntity>;
    findUnique(id: string): Promise<TicketEntity>;
    findAll(): Promise<TicketEntity[]>;
    delete(id: string): Promise<TicketEntity>;
}
