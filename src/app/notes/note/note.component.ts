import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../Models/Notes';
import { NotesService } from '../services/notes.service';
import * as moment from 'moment';
moment.locale('es');
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note!: Note;

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {
    console.log('this.note', this.note)
  }

  public onToggleArchiveNote(note: Note) {
    note.archive ? this.notesService.desArchiveNote(note) : this.notesService.archiveNote(note);
  }

  public onRemoveNote(note: Note) {
    this.notesService.removeNote(note);
  }

  public onDateNote(date: Date) {
    return moment(date).calendar();
  }

}
