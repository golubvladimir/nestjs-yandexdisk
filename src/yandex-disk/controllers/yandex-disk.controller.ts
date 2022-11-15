import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { YandexDiskService } from '../services/yandex-disk.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('yandex-disk')
export class YandexDiskController {
  constructor(
    private readonly yandexDiskService: YandexDiskService
  ) {}

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  filesUpload(@UploadedFiles() files: Array<Express.Multer.File>) {
    this.yandexDiskService.filesUpload(files)
  }
}