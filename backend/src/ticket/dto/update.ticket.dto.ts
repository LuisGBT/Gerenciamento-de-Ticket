import { IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateTicketDto{

    @IsNumber()
    @IsOptional()
    quantity:    number

    @IsString()
    @IsOptional()
    employeeId:  string
}