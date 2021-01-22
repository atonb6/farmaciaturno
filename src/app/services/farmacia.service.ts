import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {
_url='maps/index.php/ws/getLocalesRegion?id_region=7'
  constructor(
    private http: HttpClient
  ) { 
    console.log("servicio Farmacia")
  }

  getFarmacias(){
    let header = new HttpHeaders()
    .set('Type-content', 'application/json')

    return this.http.get(this._url,{
      headers: header
    });

  }
}
