import { AppareilsPage } from './../appareils/appareils';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  appareilsPage = AppareilsPage;

  constructor(public navCtrl: NavController) {

  }
/* 
  goToAppareils(){
    this.navCtrl.push(AppareilsPage);
  } */

}
