import { IsString, MinLength, MaxLength, Length, IsTaxId, IsDateString, IsEmpty, IsIn, Matches } from 'class-validator';

export class CreateEmployeeDto {
    @IsString()
    @MinLength(3)
    @MaxLength(55)
    name: string

    @IsString()
    @Length(11)
    @Matches(/^\d{11}$/, {message: `CPF must contain exactly 11 digits`})
    CPF: string

    @IsString()
    @MaxLength(10)
    @IsIn(['active', 'inactive'], {message: `situation must be either "active" or "inactive`})
    situation: string
}