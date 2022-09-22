import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'notes',
  template: `
  <h1>{{ note.title }}</h1>

  <p>{{ note.body }}</p>
  `,
})
export class NoteDetailComponent implements OnInit {
  note: any = {};

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.currentNote$.subscribe((note) => {
      console.log(note);
      this.note = note;
    });
  }
}
