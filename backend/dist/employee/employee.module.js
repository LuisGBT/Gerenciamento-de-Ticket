"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModule = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("./employee.service");
const employee_controller_1 = require("./employee.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const employee_repository_1 = require("./repository/employee.repository");
let EmployeeModule = class EmployeeModule {
};
exports.EmployeeModule = EmployeeModule;
exports.EmployeeModule = EmployeeModule = __decorate([
    (0, common_1.Module)({
        providers: [employee_service_1.EmployeeService, prisma_service_1.PrismaService, employee_repository_1.EmployeeRepository],
        controllers: [employee_controller_1.EmployeeController],
        exports: [employee_service_1.EmployeeService, employee_repository_1.EmployeeRepository]
    })
], EmployeeModule);
//# sourceMappingURL=employee.module.js.map