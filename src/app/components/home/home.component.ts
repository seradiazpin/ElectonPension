import { Component, OnInit } from '@angular/core';
import { PersonasService } from "app/services/personas.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    persons;
    constructor(private personasService: PersonasService) {
    }
    ngOnInit() {
        this.getData();
    }
    getData(): void {
        this.personasService.getPersonsList().then((data) => {
            this.persons = data;
            console.log(data);
        });
    }

}
