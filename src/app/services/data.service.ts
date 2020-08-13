import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

dataArray: string[] = [];

    insertData(data: string){
        this.dataArray.unshift(data);
    }

}