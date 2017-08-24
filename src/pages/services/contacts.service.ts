import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactsService {
  private contacts: { name: string; number: number }[] = [];
  constructor(private storage: Storage) {}
  addContact(contact: { name: string; number: number }) {
    this.contacts.push(contact);
    this.storage.set("contacts", this.contacts);
  }
  getContacts() {
    return this.storage.get("contacts").then(contacts => {
      this.contacts = contacts == null ? [] : contacts;
      return this.contacts.slice();
    });
  }
}
