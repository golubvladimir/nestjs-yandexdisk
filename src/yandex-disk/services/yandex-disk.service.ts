import { Injectable } from '@nestjs/common';
import { YaDisk } from 'ya-disk-rest-api';
import { Express } from 'express'

@Injectable()
export class YandexDiskService {
  async filesUpload(files: Array<Express.Multer.File>) {
    const disk = new YaDisk('<token>');

    await Promise.all(files.map(async (file) => {
      await disk.upload({
        path: file['originalname'],
        file: file['buffer']
      });
    }));
  }
}