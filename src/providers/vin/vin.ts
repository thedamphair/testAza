import { HttpClient } from '@angular/common/http';
import { URL_PROVIDER } from '../config.providers';
import { Injectable } from '@angular/core';

@Injectable()

export class VinProvider {
  private url = `${URL_PROVIDER}/tests/v1/`;


  constructor(
    private http: HttpClient
  ) {}

  public async findVin(vinID: string): Promise<any> {
    return this.http.get(`${this.url}${vinID}`, { responseType: 'text' }).toPromise();
  }

}
