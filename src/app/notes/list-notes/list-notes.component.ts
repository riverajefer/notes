import { Component, OnInit } from '@angular/core';
import { Note } from '../Models/Notes';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  public notes!: Note[];

  constructor(public notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.changeEvent.subscribe((newNote) => {
      console.log('newNote', newNote)
      this.notes = this.notesService.getNotes();
      this.sortNotes();
    });
  }

  public sortNotes() {
    this.notes.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }
}
