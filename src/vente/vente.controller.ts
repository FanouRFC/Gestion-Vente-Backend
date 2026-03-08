import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { VenteService } from './vente.service';
import { CreateVenteDTO } from './dto/create-vente.dto';
import { UpdateVenteDTO } from './dto/update-vente.dto';

@Controller('vente')
export class VenteController {
    constructor(private venteService : VenteService){}
    @Get("")
    getAll(){
        return this.venteService.getAll()
    }

    @Post("")
    add(@Body(ValidationPipe) body: CreateVenteDTO){
        return this.venteService.add(body)
    }

    @Patch(":numProduit")
    update(@Param("numProduit", ParseIntPipe) numProduit, @Body(ValidationPipe) body : UpdateVenteDTO){
        return this.venteService.update(numProduit, body)
    }

    @Delete(":numProduit")
    remove(@Param("numProduit", ParseIntPipe) numProduit){
        return this.venteService.remove(numProduit)
    }

    @Get("stats")
    getStats(){
        return this.venteService.stats()
    }
}
