import {
  IsDateString,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditUserDto {
  @IsString()
  @IsOptional()
  readonly firstName?: string;
  @IsString()
  @IsOptional()
  readonly lastName?: string;
  @IsEmail()
  @IsString()
  @IsOptional()
  readonly email?: string;
  @IsString()
  @IsOptional()
  password?: string;
  @IsNumber()
  @IsOptional()
  readonly phone?: number;
  @IsNumber()
  @IsOptional()
  readonly docid?: number;
  @IsString()
  @IsOptional()
  readonly country?: string;
  @IsString()
  @IsOptional()
  readonly city?: string;
  @IsString()
  @IsOptional()
  readonly state?: string;
  @IsString()
  @IsOptional()
  readonly street?: string;
  @IsString()
  @IsOptional()
  readonly hosueName?: string;
  @IsNumber()
  @IsOptional()
  readonly pin?: string;
  @IsDateString()
  @IsOptional()
  readonly dob?: Date;
}
