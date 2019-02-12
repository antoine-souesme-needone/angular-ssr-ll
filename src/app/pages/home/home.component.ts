import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/shared/example/example.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
      private exampleService: ExampleService
  ) { }

  ngOnInit() {
      this.exampleService.helloWorld();
  }

}
