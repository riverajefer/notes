import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { NotesService } from '../services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-index-note',
  templateUrl: './index-note.component.html',
  styleUrls: ['./index-note.component.scss']
})
export class IndexNoteComponent implements OnInit {

  constructor(public dialog: MatDialog, private notesService: NotesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public onOpenDialogCreateNote() {
    const dialogRef = this.dialog.open(CreateNoteComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.openSnackBar()
    });
  }

  private openSnackBar() {
    this._snackBar.open('Nota creada', 'Cerrar');
  }

}
