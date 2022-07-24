import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Note } from '../Models/Notes';
import { NotesService } from '../services/notes.service';
import { MatDialogRef } from '@angular/material/dialog';
import { IndexNoteComponent } from '../index-note/index-note.component';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  public createNoteForm = this.formBuilder.group({
    title: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[-_ a-zA-Z0-9]*')
      ])],
    description: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(25),
        Validators.maxLength(150)])],
  });

  constructor(
    private formBuilder: FormBuilder,
    private notesService: NotesService,
    public dialogRef: MatDialogRef<IndexNoteComponent>) {
  }

  ngOnInit(): void { }

  public onSubmit(): void {
    console.log('submit');
    console.log(this.createNoteForm.value);
    const note: Note = {
      id: 1,
      title: this.createNoteForm.value.title,
      description: this.createNoteForm.value.description,
      date: new Date(),
      archive: false
    }

    this.notesService.saveNote(note);
    this.createNoteForm.reset();
    this.dialogRef.close();
    this.notesService.getNotes();
  }

}
