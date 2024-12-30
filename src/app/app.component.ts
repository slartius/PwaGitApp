import { Component } from '@angular/core';
import { Data } from './data';
import { DbaccService } from './dbacc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Druga aplikacija';
  data: Data[]=[];
  constructor(private service: DbaccService){
    service.testing();
    service.getData().subscribe(data=> {this.data=data;});
  }
  
}
