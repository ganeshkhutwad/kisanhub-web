import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public getListFromDictionary(dictionary: any[], key: string): any[] {
    return dictionary.reduce((acc, ele) => acc.concat(ele[key]), []);
  }
}
