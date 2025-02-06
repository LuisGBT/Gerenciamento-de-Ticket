import { IsNumber, IsString } from "class-validator"


export class CreateTicketDto{

    @IsNumber()
    quantity:    number

    @IsString()
    employeeId:  string
}