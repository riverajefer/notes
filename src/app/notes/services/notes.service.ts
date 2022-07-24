import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { Note } from '../Models/Notes';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private noteSource = new BehaviorSubject<Note[]>([]);
  public changeEvent = this.noteSource.asObservable();

  constructor(private localService: LocalService) { }

  public saveNote(note: Note): void  {
    let notes = this.getNote();
    if (notes.length > 0) {
      notes.push(note);
    } else {
      notes = [note];
    }

    this.localService.saveData('notes', JSON.stringify(notes));
    this.noteSource.next([note]);
  }


  public getNote(): Note[] {
    const data = this.localService.getData('notes');
    return JSON.parse(data || '{}');
  }

  public getNotes(): Note[] {
    const data = this.localService.getData('notes');
    return JSON.parse(data || '{}');
  }

  public removeNote() {
    this.localService.removeData('notes');
  }

  public clearNotes() {
    this.localService.clearData();
  }

  public archiveNote(note: Note) {
    note.archive = true;
    this.saveNote(note);
  }

}
