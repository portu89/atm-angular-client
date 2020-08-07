import { Component } from '@angular/core';
import { EnviromentService } from 'src/services/enviroment-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{

  constructor(
    private enviromentService: EnviromentService
  ) {}

}
