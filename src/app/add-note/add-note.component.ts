import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
})
export class AddNoteComponent {
  note: any = {};

  constructor(private noteService: NoteService) {}

  changeNewNoteObject(key, value) {
    this.note[key] = value;
  }

  save() {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(this.note);
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}
