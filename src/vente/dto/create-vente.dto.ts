import { IsNumber, IsString } from "class-validator";

export class CreateVenteDTO{
    @IsString()
    design: string

    @IsNumber()
    prix: number

    @IsNumber()
    quantite: number

}