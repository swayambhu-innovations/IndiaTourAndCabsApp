import { Injectable } from '@angular/core';
import { ConfirmationResult } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { booking } from 'src/structures/booking.structure';


@Injectable({
  providedIn: 'root'
})
export class  DataProviderService {

  public LoggedInUser :boolean = false;
  public user:any;
  public loading:boolean = false;
  public chooseService:any[]=[];
  public signUp:any;
  public notification:any[] = [];
  public phoneData : ConfirmationResult | any;
  public appSettings:any;
  public loadedClothImages:{name:string,image:string}[] = [];
  public booking: booking|undefined;
  public vehicle:any;
  constructor() { }
}
