import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../Models/Notes';
import { NotesService } from '../services/notes.service';


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

  public onArchiveNote(note: Note) {
    console.log('onArchiveNote', note);
    this.notesService.archiveNote(note);
  }

}
