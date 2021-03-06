import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {ConversationService} from "../../services/conversation.service";
import {AppService} from "../../services/app.service";


@Component({
    selector: 'conversation-settings',
    templateUrl: 'template.html',
    providers: [ConversationService],
})
export class ConversationSettings {

    title: String = "No title"

    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public conversationService: ConversationService
        , public appService: AppService) {
    }

    ionViewDidEnter() {
    }

    ionViewWillLeave() {
    }

    /**
     * Change name of group
     * TODO:
     */
    changeGroupName(newName: string) {
        let params = {name: "My school friends"};
        QB.chat.dialog.update(this.appService.chat._id, params, (err, response) => {

        });
    }

    /**
     * Add new people to group
     * TODO:
     */
    addPeople(uids: number[]) {
        let params = {push_all: {occupants_ids: uids}};
        QB.chat.dialog.update(this.appService.chat._id, params, (err, response) => {

        });
    }

    /**
     * Remove people from Chat
     */
    removePeople(uids: number[]) {
        let params = {pull_all: {occupants_ids: uids}};
        QB.chat.dialog.update(this.appService.chat._id, params, (err, reponse) => {

        });
    }
}

