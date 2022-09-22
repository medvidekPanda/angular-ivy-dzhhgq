import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotesComponent } from './component/notes/notes.component';
import { NoteDetailComponent } from './component/note-detail/note-detail.component';
import { AddNoteComponent } from './component/add-note/add-note.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'notes',
      },
      {
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'note-detail',
        component: NoteDetailComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    AddNoteComponent,
    NotesComponent,
    NoteDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
