import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateTicketDto{

    @IsNumber()
    @IsOptional()
    quantity:    number

    @IsString()
    @IsOptional()
    employeeId:  string
}