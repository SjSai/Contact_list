import { Component } from "@angular/core";
import { CallNumber } from "@ionic-native/call-number";
import { NavController } from "ionic-angular";
import { NewContactPage } from "../new-contact/new-contact";
import { ContactsService } from "../services/contacts.service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  contacts: { name: string; number: number }[] = [];
  constructor(
    public navCtrl: NavController,
    private contactsService: ContactsService,
    private callNumber: CallNumber
  ) {}
  ionViewWillEnter() {
    this.contactsService
      .getContacts()
      .then(contacts => (this.contacts = contacts));
  }
  onClickButton() {
    this.navCtrl.push(NewContactPage);
  }
  makeCall(num) {
    console.log(num);
    this.callNumber
      .callNumber(num, true)
      .then(() => console.log("Launched dialer!"))
      .catch(() => console.log("Error launching dialer"));
  }
}
