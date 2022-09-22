import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteItem } from '../../model/note.model';

import { NoteService } from '../../service/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  noteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    date: new FormControl<string | null>(null),
    phone: new FormControl<string | null>(null, [
      Validators.pattern('^\\+420 [0-9]{3} [0-9]{3} [0-9]{3}$'),
    ]),
  });

  constructor(private readonly noteService: NoteService) {}

  save() {
    this.noteService.addNote(this.noteForm.value as NoteItem);
    this.noteForm.reset();
  }
}
