import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vin-data',
  templateUrl: './vin-data.component.html'
})
export class VinDataComponent {
  private data: any;
  private upd: boolean;
  constructor() { }
  @Input()
  set update(val: boolean) {
    this.upd = val;
  }
  get update() {
    return this.upd;
  }
  @Input('vinData')
  set setData(newData: any) {
    if (!this.upd) {
      this.data = undefined;
      return;
    }
    this.data = newData;
  }
  get getData() {
    return this.data;
  }

  private showElement(element) {
    if (typeof element === 'string') {
      return element;
    }
    return 'NO DATA';
  }
}
