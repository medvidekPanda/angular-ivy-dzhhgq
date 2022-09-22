import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
  notes = [];

  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit() {
    this.notes = JSON.parse(localStorage.getItem('notes'));
  }

  goTo(note) {
    this.noteService.currentNote$.next(note);
    this.router.navigate(['/note-detail']);
  }
}
