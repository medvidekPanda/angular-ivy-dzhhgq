import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { NoteItem } from '../../model/note.model';
import { NoteService } from '../../service/note.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
})
export class NoteDetailComponent {
  note$: Observable<NoteItem> = this.activatedRoute.queryParamMap.pipe(
    switchMap((params) => {
      const id = Number(params.get('id'));
      return this.noteService.getNote$(id);
    })
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly noteService: NoteService
  ) {}
}
