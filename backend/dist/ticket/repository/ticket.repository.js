"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRepository = void 0;
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let TicketRepository = class TicketRepository {
    constructor(PrismaService) {
        this.PrismaService = PrismaService;
    }
    async create(CreateTicketDto) {
        return await this.PrismaService.ticket.create({
            data: {
                quantity: CreateTicketDto.quantity,
                employee: {
                    connect: { id: CreateTicketDto.employeeId }
                }
            }
        });
    }
    async findUnique(id) {
        return await this.PrismaService.ticket.findUnique({ where: { id } });
    }
    async findAll() {
        const res = await this.PrismaService.ticket.findMany();
        console.log(res);
        return res;
    }
};
exports.TicketRepository = TicketRepository;
exports.TicketRepository = TicketRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TicketRepository);
//# sourceMappingURL=ticket.repository.js.map