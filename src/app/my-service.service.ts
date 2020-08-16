import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MyService {
    static instance: MyService;
    constructor() {
        MyService.instance = this;
    }

    doSomething() {
        console.log("something!");
    }
}
