import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data = new BehaviorSubject<any>(null);
  public sharedData = this.data.asObservable();

  constructor() { }

  public updateData( value: any) {
    this.data.next(value);
  }
}
