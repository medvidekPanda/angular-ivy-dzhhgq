import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { AddNoteComponent } from './add-note/add-note.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
    HelloComponent,
    AddNoteComponent,
    NotesComponent,
    NoteDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
