import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { nanoid } from 'nanoid';

const contactsPath = join(__dirname, 'db', 'contacts.json');

function listContacts() {
  const data = readFileSync(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === contactId);
  if (result === false) {
    return null;
  }
  return result;
}

function removeContact(contactId) {
  const contacts = listContacts();
  const newContact = { name, email, phone, id: nanoid() };
  contacts.push(newContact);
  writeFileSync(contactsPath, JSON.stringify(contacts));
  return newContact;
}

function addContact(name, email, phone) {
  const contacts = listContacts();
  const newContact = { name, email, phone, id: nanoid() };
  contacts.push(newContact);
  writeFileSync(contactsPath, JSON.stringify(contacts));
  return newContact;
}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
