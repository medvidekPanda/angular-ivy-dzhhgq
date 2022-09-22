import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { NoteItem } from '../model/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private reload$ = new BehaviorSubject<void>(null);

  addNote(note: NoteItem) {
    const notes: NoteItem[] = JSON.parse(localStorage.getItem('notes')) ?? [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    this.reload$.next();
  }

  getNotes$(): Observable<NoteItem[] | undefined> {
    return this.reload$.pipe(
      map(() => {
        const storage: NoteItem[] =
          JSON.parse(localStorage.getItem('notes')) ?? [];
        const keys = Object.keys(storage);

        if (keys.length) {
          return keys.map((key) => storage[key]);
        }

        return;
      })
    );
  }

  getNote$(index: number): Observable<NoteItem> {
    const storage: NoteItem[] = JSON.parse(localStorage.getItem('notes'));
    // Because of here should be API
    return of(storage[index]);
  }

  removeNote(index: number) {
    const notes = JSON.parse(localStorage.getItem('notes')) ?? [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    this.reload$.next();
  }
}
