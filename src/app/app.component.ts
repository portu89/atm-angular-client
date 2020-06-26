import { Component, OnInit } from '@angular/core';
import { EnviromentService } from 'src/services/enviroment-service';
import { catchError } from 'rxjs/operators'
import { throwError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'atm-angular-client';
  apiStatus: string;
  dbStatus: string;
  elasticStatus: string;

  constructor(
    private enviromentService: EnviromentService
  ) {}

  ngOnInit() {
    this.enviromentService.testApi()
      .subscribe(
        () => this.apiStatus = "running",
        () => this.apiStatus = "error"
      );

    this.enviromentService.testDb()
      .subscribe(
        () => this.dbStatus = "running",
        () => this.dbStatus = "error"
      );
  }
}
