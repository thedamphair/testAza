import { Component, OnInit } from '@angular/core';
import { VinProvider } from '../../providers/vin/vin';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public foundData = false;
  public disabledButton = false;
  public vinID: string;
  public data: any;
  constructor(
    private vinP: VinProvider,
    private xmlToJsonService: NgxXml2jsonService
  ) { }
  ngOnInit() {
  }

  public xmlToJson(xmlData: string): any {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlData, 'text/xml');
    const obj = this.xmlToJsonService.xmlToJson(xml);
    return obj;
  }

  public async findVin() {
    try {
      if (this.vinID === '') {
        alert('No se ha ingresado información');
        return;
      }
      this.disabledButton = true;
      const result = await this.vinP.findVin(this.vinID);
      this.disabledButton = false;
      this.foundData = true;
      this.data = this.xmlToJson(result);
    } catch (error) {
      alert(JSON.stringify(error));
      this.disabledButton = false;
    }
  }

}
