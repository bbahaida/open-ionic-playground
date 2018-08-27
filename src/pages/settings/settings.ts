import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public alertCtrl: AlertController) {
  }

  onToggleLight(){
    const alert = this.alertCtrl.create({
      title: 'tu veux continuer ?',
      subTitle: 'cette action allumera ou eteindra toutes les lumieres de la maison!!',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé')
        }
      ]
    });
    alert.present();
  }

}
