import { Component, OnInit } from '@angular/core';
import { Note, Notes } from '../Models/Notes';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  public notes: Note[] = [
    {
      id: 1,
      title: 'Note 1',
      description: 'This is the first note',
      date: new Date(),
      archive: false
    },
    {
      id: 2,
      title: 'Note 2',
      description: 'This is the second note',
      date: new Date(),
      archive: false
    },
    {
      id: 3,
      title: 'Note 3',
      description: 'This is the third note',
      date: new Date(),
      archive: false
    }

  ];

  constructor() {

  }

  ngOnInit(): void {

  }
}
