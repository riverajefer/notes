import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../Auth/services/auth.service';
import { UserAuth } from '../../Auth/Models/User';

@Component({
  selector: 'app-index-note',
  templateUrl: './index-note.component.html',
  styleUrls: ['./index-note.component.scss']
})
export class IndexNoteComponent implements OnInit {

  public user!: UserAuth;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    this.user = this.authService.getUser();
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

  public onLogout() {
    this.authService.logout();
  }

}
