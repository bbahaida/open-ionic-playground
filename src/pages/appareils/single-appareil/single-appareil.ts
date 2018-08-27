import { AppareilsService } from './../../../services/appareils.service';
import { Appareil } from './../../../models/appareil.model';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage {

  index: number;
  appareil : Appareil;

  constructor(public navParams: NavParams, public viewCtrl: ViewController, private appareilsService: AppareilsService) {
    this.index = navParams.get('index');
    this.appareil = appareilsService.getAppareilByIndex(this.index);
  }

  onToggleAppareil(){
    this.appareil.isOn = !this.appareil.isOn;
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  

}
