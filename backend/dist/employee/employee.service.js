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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const employee_repository_1 = require("./repository/employee.repository");
let EmployeeService = class EmployeeService {
    constructor(EmployeeRepository) {
        this.EmployeeRepository = EmployeeRepository;
    }
    async create(CreateEmployeeDto) {
        try {
            if (CreateEmployeeDto.situation === "inactive") {
                throw new common_1.HttpException('situation cannot start with inactive', common_1.HttpStatus.UNAUTHORIZED);
            }
            let res = await this.EmployeeRepository.findUniqueCpf(CreateEmployeeDto.CPF);
            if (res !== null) {
                throw new common_1.HttpException('CPF already existing in the system', common_1.HttpStatus.FORBIDDEN);
            }
            return this.EmployeeRepository.create({
                name: CreateEmployeeDto.name,
                CPF: CreateEmployeeDto.CPF,
                situation: CreateEmployeeDto.situation,
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    ;
    async findAll() {
        try {
            return this.EmployeeRepository.findAll();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findUnique(id) {
        try {
            return this.EmployeeRepository.findUnique(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, UpdateEmployeeDto) {
        try {
            const res = await this.EmployeeRepository.findUnique(id);
            if (res == null) {
                throw new common_1.HttpException('non-existent user', common_1.HttpStatus.BAD_REQUEST);
            }
            return this.EmployeeRepository.update(id, UpdateEmployeeDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        const res = await this.EmployeeRepository.findUnique(id);
        if (res == null) {
            throw new common_1.HttpException('non-existent user', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.EmployeeRepository.delete(id);
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [employee_repository_1.EmployeeRepository])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map