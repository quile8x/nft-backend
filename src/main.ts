import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


import * as fs from 'fs';
import * as path from 'path';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

// const key = './../dev.local+1-key.pem';

// const certPath = './../dev.local+1-key.pem'

async function bootstrap() {
 // const app = await NestFactory.create(AppModule);

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  //app.useStaticAssets(join(__dirname, '..', 'public'));

    //  useStaticAssets(join(__dirname, '../views/public'), {
    //   index: false,
    //   redirect: false
    // })

  //app.useStaticAssets(join(__dirname, '..', 'public'));

  // app.useStaticAssets(join(__dirname, '../public'), {
  //   index: false,
  //   redirect: false
  // })

  app.enableCors();
  await app.listen(3002);


  // // http://localhost:3002/

  // const port = Number(process.env.PORT) || 3002;
  // const hostname = process.env.HOSTNAME || 'localhost';
  // await app.listen(port, hostname, () => {
  //   const address =
  //     'https' + '://' + hostname + ':' + port + '/';
  //   Logger.log('Listening at ' + address);
  // });



  const ssl = true;//process.env.SSL === 'true' ? true : false;
  let httpsOptions = null;
  if (ssl) {
    const keyPath = './../dev.local+1-key.pem' || '';
    const certPath = './../dev.local+1.pem' || '';

    // const keyPath = './../privkey.pem' || '';
    // const certPath = './../fullchain.pem' || '';


  
    httpsOptions = {
      key: fs.readFileSync(path.join(__dirname, keyPath)),
      cert: fs.readFileSync(path.join(__dirname, certPath)),
    };
  }

  // const app = await NestFactory.create(AppModule, { httpsOptions });
  // app.enableCors();

  // const port = Number(process.env.PORT) || 3002;
  // const hostname = process.env.HOSTNAME || '18.140.70.28';
  // await app.listen(3002);

  // await app.listen(port, hostname, () => {
  //   const address =
  //     'http' + (ssl ? 's' : '') + '://' + hostname + ':' + port + '/';
  //   Logger.log('Listening at ' + address);
  // });


}
bootstrap();
