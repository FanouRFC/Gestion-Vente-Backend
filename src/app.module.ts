import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VenteModule } from './vente/vente.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), VenteModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})

export class AppModule {}
