import { Component } from '@angular/core';

@Component({
  selector: 'praffuldaga',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title = 'Angular Assignment';

  sayHello(){
    return "Hello from method!"
  }

  callSayHello(){
    return this.sayHello()
  }
}
