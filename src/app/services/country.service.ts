import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries() {
      return firstValueFrom(this.http
          .get<any>('assets/data/countries.json'))
          .then((res) => <any[]>res.data)
          .then((data) => {
              return data;
          });
  }
}
