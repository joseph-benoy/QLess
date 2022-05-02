import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
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
  @IsDateString()
  @IsNotEmpty()
  readonly startAccept: number;
  @IsDateString()
  @IsNotEmpty()
  readonly endAccept: number;
}
