import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { Note } from '../Models/Notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private localService: LocalService) { }

  public saveNote(note: Note) {
    this.localService.saveData('note', JSON.stringify(note));
  }

  public getNote(): Note  {
    const data = this.localService.getData('note');
    return JSON.parse(data || '{}');
  }

  public removeNote() {
    this.localService.removeData('note');
  }

  public clearNotes() {
    this.localService.clearData();
  }

  public archiveNote(note: Note) {
    note.archive = true;
    this.saveNote(note);
  }

}
