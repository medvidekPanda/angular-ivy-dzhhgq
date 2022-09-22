import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { NoteService } from '../../service/note.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  notes$ = this.noteService.getNotes$();

  constructor(
    private readonly noteService: NoteService,
    private readonly router: Router
  ) {}

  goToNote(index: number) {
    this.router.navigate(['/note-detail'], { queryParams: { id: index } });
  }

  removeNote(index: number) {
    this.noteService.removeNote(index);
  }
}
