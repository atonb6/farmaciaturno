import { Component, Input } from "@angular/core";
import { FarmaciaService } from "./services/farmacia.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "farmacias";
  public selectedFarmacia: Array<any> = [];
  public farmacia: Array<any> = [];


  constructor(private farmaciaService: FarmaciaService) {
    this.farmaciaService.getFarmacias().subscribe((resp: any) => {
      console.log(resp);
      this.farmacia = resp;
    });

    

  }

  onOptionsSelected(value:any){
    console.log("the selected value is " + value);
}

}
