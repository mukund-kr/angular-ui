import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(){}

  // public accessDataSizes(): Array<keyof typeof DataSizeEnum> {
  //   let dataSizes: Array<keyof typeof DataSizeEnum> = [];
  //   for (let dataSize in DataSizeEnum) {
  //     dataSizes.push(DataSizeEnum[dataSize]);
  //   }
  //   return dataSizes;
  // }
}