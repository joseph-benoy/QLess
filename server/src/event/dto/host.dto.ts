import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class HostDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsString()
  @IsOptional()
  readonly link?: string;
  @IsDateString()
  @IsNotEmpty()
  readonly date: Date;
  @IsNotEmpty()
  @IsNumber()
  @Max(60)
  @Min(5)
  readonly startAccept: number;
  @IsNotEmpty()
  @IsNumber()
  @Max(60)
  @Min(5)
  readonly endAccept: number;
}
