import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateVenteDTO{
    @IsString()
    @IsOptional()
    design: string
    
    @IsNumber()
    @IsOptional()
    prix: number

    @IsNumber()
    @IsOptional()
    quantite: number

}