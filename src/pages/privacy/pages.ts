import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Login} from "../login/pages";
import {AppService} from "../../services/app.service";

@Component({
    styles: ['ion-icon { display: block; text-align: center; font-size: 10em; }'],
    templateUrl: 'template.html',
})
export class PrivacySettings {
    public isChecked: boolean = false;

    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public appService: AppService) {
    }
}
