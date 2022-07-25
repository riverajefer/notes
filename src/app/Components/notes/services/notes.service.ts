import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { Note } from '../Models/Notes';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private static NOTES = 'notes';

  private noteSource = new BehaviorSubject<Note[]>([]);
  public changeEvent = this.noteSource.asObservable();

  constructor(private localService: LocalService) { }

  public saveNote(note: Note): void {
    let notes = this.getNotes();
    if (notes.length > 0) {
      notes.push(note);
    } else {
      notes = [note];
    }

    this.localService.saveData(NotesService.NOTES, JSON.stringify(notes));
    this.noteSource.next([note]);
  }

  public updateNote(note: Note) {
    const newNotes = this.getNotes().map(obj => {
      if (obj.id === note.id) {
        return { ...obj, ...note };
      }
      return obj;
    });
    this.localService.saveData(NotesService.NOTES, JSON.stringify(newNotes));
  }


  public getNote(): Note[] {
    const data = this.localService.getData(NotesService.NOTES);
    return JSON.parse(data || '{}');
  }

  public getNotes(): Note[] {
    const data = this.localService.getData(NotesService.NOTES);
    return JSON.parse(data || '{}');
  }

  public removeNote(note: Note) {
    let notes = this.getNotes();
    const index = notes.findIndex(obj => {
      return obj.id === note.id;
    })
    if (index !== -1) notes.splice(index, 1);

    this.localService.saveData(NotesService.NOTES, JSON.stringify(notes));
    this.noteSource.next([note]);
  }

  public hasNotes(): boolean {
    return this.getNotes().length > 0;
  }

  public clearNotes() {
    this.localService.clearData();
  }

  public archiveNote(note: Note) {
    note.archive = true;
    this.updateNote(note);
    this.noteSource.next([note]);
  }

  public desArchiveNote(note: Note) {
    note.archive = false;
    this.updateNote(note);
    this.noteSource.next([note]);
  }

}
