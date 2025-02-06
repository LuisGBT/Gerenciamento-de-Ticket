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
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const ticket_repository_1 = require("./repository/ticket.repository");
const employee_service_1 = require("../employee/employee.service");
let TicketService = class TicketService {
    constructor(TicketRepository, EmployeeService) {
        this.TicketRepository = TicketRepository;
        this.EmployeeService = EmployeeService;
    }
    async create(CreateTicketDto) {
        try {
            let res = await this.EmployeeService.findUnique(CreateTicketDto.employeeId);
            if (res == null) {
                throw new common_1.HttpException('NOT FOUND', common_1.HttpStatus.NOT_FOUND);
            }
            return this.TicketRepository.create({
                quantity: CreateTicketDto.quantity,
                employeeId: CreateTicketDto.employeeId
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async update(id, UpdateTicketDto) {
        try {
            let res = await this.TicketRepository.findUnique(id);
            if (res == null) {
                throw new common_1.HttpException('NOT FOUND', common_1.HttpStatus.NOT_FOUND);
            }
            return this.TicketRepository.update(id, UpdateTicketDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findUnique(id) {
        try {
            return this.TicketRepository.findUnique(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            return await this.TicketRepository.findAll();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        let res = await this.TicketRepository.delete(id);
        return res;
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ticket_repository_1.TicketRepository, employee_service_1.EmployeeService])
], TicketService);
//# sourceMappingURL=ticket.service.js.map