import { Module } from '@nestjs/common';
import { YandexDiskController } from './controllers/yandex-disk.controller';
import { YandexDiskService } from './services/yandex-disk.service';

@Module({
  controllers: [
    YandexDiskController
  ],
  providers: [
    YandexDiskService
  ]
})
export class YandexDiskModule {}