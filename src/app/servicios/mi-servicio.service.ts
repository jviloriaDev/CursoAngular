import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  mensajeObservable = new  BehaviorSubject('');

  constructor() { }

  getMensaje(): Observable<string> {
    return this.mensajeObservable.asObservable();
  }

  setMensaje(msg: string): void {
    this.mensajeObservable.next(msg);
  }
}
