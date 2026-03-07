import { Module } from '@nestjs/common';
import { VenteService } from './vente.service';
import { VenteController } from './vente.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [VenteService, PrismaService],
  controllers: [VenteController]
})
export class VenteModule {}
