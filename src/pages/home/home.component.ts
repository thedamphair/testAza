import { Component, OnInit } from '@angular/core';
import { VinProvider } from '../../providers/vin/vin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public foundData = false;
  public disabledButton = false;
  public vinID: string;
  constructor(
    private vinP: VinProvider
  ) { }
  ngOnInit() {
  }

  public async findVin() {
    try {
      this.disabledButton = true;
      const result = await this.vinP.findVin(this.vinID);
      this.disabledButton = false;
      console.log(result);
    } catch (error) {
      alert(JSON.stringify(error));
      this.disabledButton = false;
    }
  }

}
