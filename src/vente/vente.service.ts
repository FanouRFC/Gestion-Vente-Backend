import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVenteDTO } from './dto/create-vente.dto';
import { UpdateVenteDTO } from './dto/update-vente.dto';

@Injectable()
export class VenteService {
    constructor(private prismaService : PrismaService){}

    async getAll(){
        return await this.prismaService.vente.findMany({orderBy: {numProduit: 'asc'}})
    }

    async add(data: CreateVenteDTO){
        return await this.prismaService.vente.create({data})
    }

    async remove(numProduit:number){
        return await this.prismaService.vente.delete({where: {numProduit}})
    }

    async update(numProduit:number, data: UpdateVenteDTO){
        return await this.prismaService.vente.update({where: {numProduit}, data})
    }

    async stats(){
        const ventes =  await this.prismaService.vente.findMany()
        var montant: number[] = []
        var montantTotal: number = 0
        for(let vente of ventes){
            montantTotal += vente.prix * vente.quantite
            montant.push(vente.prix * vente.quantite)
        }
        var montantFiltre = montant.sort((a, b)=> a - b)
        return {
            montantMinimal: montantFiltre[0],
            montantMaximal: montantFiltre[montantFiltre.length - 1],
            montantTotal
        }
    }
}
