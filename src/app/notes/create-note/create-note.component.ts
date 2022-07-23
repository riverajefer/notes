import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    title: '',
    description: ''
  });

  constructor(private formBuilder: FormBuilder, private notesService: NotesService, public dialogRef: MatDialogRef<IndexNoteComponent>) {

  }

  ngOnInit(): void {
  }

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
  }

}
