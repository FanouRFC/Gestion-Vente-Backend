import { Controller, Get } from '@nestjs/common';
import { VenteService } from './vente.service';

@Controller('vente')
export class VenteController {
    constructor(private venteService : VenteService){}
}
