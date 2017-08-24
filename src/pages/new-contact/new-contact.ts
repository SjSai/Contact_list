import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ContactsService } from "../services/contacts.service";

@IonicPage()
@Component({
  selector: "page-new-contact",
  templateUrl: "new-contact.html"
})
export class NewContactPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contactsService: ContactsService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad NewContactPage");
  }

  onAddContact(value: { name: string; number: number }) {
    this.contactsService.addContact(value);
    this.navCtrl.pop();
  }
}
