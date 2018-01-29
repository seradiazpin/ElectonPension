import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonasService } from "app/services/personas.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, OnDestroy {
    personData
    datosDecision
    datosLiquidacion
    datosPension
    private sub: any;
    constructor(private personasService: PersonasService, private route: ActivatedRoute) { }
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          console.log(params)
          this.getData(+params['id']);
      });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }
  getData(id): void {
      this.personasService.getPersonsInfo(id).then((data) => {
          this.personData = data;
          this.datosDecision = data["datosDecision"];
          this.datosLiquidacion = data["datosLiquidacion"];
          this.datosPension = data["datosPension"];
          console.log(data);
      });
  }

}
