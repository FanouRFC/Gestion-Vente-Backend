import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { networkInterfaces } from 'os';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');

  const nets = networkInterfaces();
  const localIp = Object.values(nets)
    .flat()
    .find((n) => n?.family === 'IPv4' && !n.internal)?.address;

  console.log(`API running on http://localhost:${port}`);
  if (localIp) console.log(`Network access: http://${localIp}:${port}`);
}
bootstrap();
