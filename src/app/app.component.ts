import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  selectedCar: number;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  ngOnInit() {
    console.log('hello ' + this.cars.length);
  }

  customSearchFn(term: string, item: any) {
    term = term.toLowerCase();
    return (
      item.id.toString() == term ||
      item.name.toLowerCase().indexOf(term) > -1 ||
      item.name.toLowerCase() === term
    );
  }
}
