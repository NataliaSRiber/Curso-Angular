import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interface/IProjects.interface';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogContent],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
// OnInit - ciclo de vida(ao iniciar o componente algo será feito)
export class DialogProjectsComponent implements OnInit{
  // injeto os dados no meu componente dentor do construtor data que pode receber os dados de IProjects
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ) {}

  public getData = signal<IProjects | null>(null);

  // toda vez que o componente for utilizado o NgOnInit fara algo
  ngOnInit(): void {
    this.getData.set(this._data)
  }

  public closeModal() {
    return this._dialogRef.close();
  }
}
