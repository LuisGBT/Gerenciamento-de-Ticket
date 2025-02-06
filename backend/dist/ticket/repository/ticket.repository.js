"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRepository = void 0;
class TicketRepository {
    constructor(PrismaService) {
        this.PrismaService = PrismaService;
    }
    async create(CreateTicketDto) {
        return this.PrismaService.ticket.create({
            data: {
                quantity: CreateTicketDto.quantity,
                employee: {
                    connect: { id: CreateTicketDto.employeeId }
                }
            }
        });
    }
}
exports.TicketRepository = TicketRepository;
//# sourceMappingURL=ticket.repository.js.map