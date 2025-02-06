import { IsString, MinLength, MaxLength, Length, IsTaxId, IsDateString, IsEmpty, IsIn, Matches, IsOptional } from 'class-validator';

export class UpdateEmployeeDto   {
    @IsString()
    @MinLength(3)
    @MaxLength(55)
    @IsOptional()
    name: string

    @IsString()
    @Length(11)
    @Matches(/^\d{11}$/, {message: `CPF must contain exactly 11 digits`})
    @IsOptional()
    CPF: string

    @IsString()
    @MaxLength(10)
    @IsIn(['active', 'inactive'], {message: `situation must be either "active" or "inactive`})
    @IsOptional()
    situation: string
}