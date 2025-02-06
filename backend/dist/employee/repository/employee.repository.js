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
exports.EmployeeRepository = void 0;
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let EmployeeRepository = class EmployeeRepository {
    constructor(PrismaService) {
        this.PrismaService = PrismaService;
    }
    async create(CreateEmployeeDto) {
        return await this.PrismaService.employee.create({ data: CreateEmployeeDto });
    }
    async findAll() {
        return await this.PrismaService.employee.findMany();
    }
    async findUnique(id) {
        return await this.PrismaService.employee.findUnique({ where: { id } });
    }
    async findUniqueCpf(CPF) {
        return await this.PrismaService.employee.findUnique({ where: { CPF } });
    }
    async update(id, UpdateEmployeeDto) {
        const employee = await this.PrismaService.employee.findUnique({ where: { id } });
        if (!employee) {
            throw new Error('Employee not found');
        }
        await this.PrismaService.employee.update({ where: { id }, data: UpdateEmployeeDto });
        return this.PrismaService.employee.findUnique({ where: { id } });
    }
    async delete(id) {
        return await this.PrismaService.employee.delete({ where: { id } });
    }
};
exports.EmployeeRepository = EmployeeRepository;
exports.EmployeeRepository = EmployeeRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeeRepository);
//# sourceMappingURL=employee.repository.js.map