import { Appareil } from './../../models/appareil.model';
import { AppareilsService } from './../../services/appareils.service';
import { SingleAppareilPage } from './../appareils/single-appareil/single-appareil';
import { NavController, ModalController } from 'ionic-angular';
import { Component } from "@angular/core";

@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html',
})
export class AppareilsPage{

    appareilsList: Appareil[];

    constructor(private modalCtrl: ModalController, private appareilsService: AppareilsService){
    }
    ionViewWillEnter(){
        this.appareilsList = this.appareilsService.getAppareils();
    }
    onLoadAppareil(index: number){
        const modal = this.modalCtrl.create(SingleAppareilPage, {index: index});
        modal.present();
    }

}