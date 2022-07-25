import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../Models/Notes';
import { NotesService } from '../services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

import * as moment from 'moment';
moment.locale('es');
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note!: Note;

  constructor(private notesService: NotesService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    console.log('this.note', this.note)
  }

  public onToggleArchiveNote(note: Note) {
    if (note.archive) {
      this.notesService.desArchiveNote(note);
      this.openSnackBar('Nota Des-archivada !');
    } else {
      this.notesService.archiveNote(note);
      this.openSnackBar('Nota Archivada !');
    }
  }

  public onRemoveNote(note: Note) {
    let confi = confirm('Deseas eliminar esta nota?')
    if (confi) {
      this.notesService.removeNote(note);
      this.openSnackBar('Nota Eliminada !');
    }
  }

  public onDateNote(date: Date) {
    return moment(date).calendar();
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'Cerrar');
  }

}


