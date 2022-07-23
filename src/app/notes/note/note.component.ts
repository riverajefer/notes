import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../Models/Notes';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note!: Note;

  constructor() {
  }

  ngOnInit(): void {
    console.log('this.note', this.note)

  }

}