import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
const fs = require('fs');
const appRoot = require('app-root-path');

@Injectable()
export class SeedService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<any>,

    @InjectModel('Sequence') private readonly sequenceModel: Model<any>,
  ) {}
  public checkEnv() {
    if (process.env.NODE_ENV == 'production') {
      if (process.env.BASE_URL_PRODUCTION == 'http://162.243.171.81:3000') {
        console.log('production...................OWN');
        return 'OWN';
      } else {
        console.log('production...................CLIENT');
        return 'CLIENT';
      }
    } else if (process.env.NODE_ENV !== 'production') {
      if (process.env.BASE_URL_TESTING == 'http://162.243.171.81:4000') {
        console.log('testing...................OWN');
        return 'OWN';
      } else {
        console.log('testing...................CLIENT');
        return 'CLIENT';
      }
    }
  }
  public async seed(SEED) {
    console.log('INSIDE SEED DB:-', SEED);
    if (SEED) {
      let rootPath = `${appRoot.path}/mongo-json`;
      let dirs = fs.readdirSync(`${rootPath}`);
      for (let dir of dirs) {
        let path = `${rootPath}/${dir}/${dir}.json`;
        if (fs.existsSync(path)) {
          let data = await fs.readFileSync(path, {
            encoding: 'utf8',
            flag: 'r',
          });
          data = JSON.parse(data);
          if (data && data.length) {
            if (dir == 'users') {
              let newArr = [];
              if (this.checkEnv() == 'OWN') {
                newArr = data;
              } else {
                for (let item of data) {
                  // console.log('item',item)
                  if (item.filePath) {
                    delete item.filePath;
                  }
                  newArr.push(item);
                }
              }
              //console.log("FINAL CONSOLE",newArr)
              await this.userModel.deleteMany({});
              let docCount = await this.userModel.create(newArr);
              console.log(`${dir}:-`, JSON.stringify(docCount.length));
            }

            if (dir == 'sequences') {
              await this.sequenceModel.deleteMany({});
              let docCount = await this.sequenceModel.create(data);
              console.log(`${dir}:-`, JSON.stringify(docCount.length));
            }
          }
        }
      }
      console.log(`All DATA MIGRATED....`);
    }
  }
}
