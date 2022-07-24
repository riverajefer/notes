import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-index-note',
  templateUrl: './index-note.component.html',
  styleUrls: ['./index-note.component.css']
})
export class IndexNoteComponent implements OnInit {

  constructor(public dialog: MatDialog, private notesService: NotesService) { }

  ngOnInit(): void {
  }

  public onOpenDialogCreateNote() {
    const dialogRef = this.dialog.open(CreateNoteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.notesService.getNotes();
    });
  }

}
