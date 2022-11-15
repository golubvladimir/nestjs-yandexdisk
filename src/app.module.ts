import { Module } from '@nestjs/common';
import { YandexDiskModule } from './yandex-disk/yandex-disk.module';

@Module({
  imports: [
    YandexDiskModule
  ]
})
export class AppModule {}
