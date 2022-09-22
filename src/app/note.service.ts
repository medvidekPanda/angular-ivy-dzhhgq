import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  currentNote$ = new BehaviorSubject(undefined);
}