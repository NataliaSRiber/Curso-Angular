import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
   public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/dancegroup.png',
      alt: 'Site de grupo de Dança',
      title: 'Grupo de Dança',
      description: 'O objetivo deste projeto foi criar um design de um website de um grupo de dança que transmitisse uma mensagem profissional e informações sobre a empresa. Não foi utilizada nenhuma api para a aplicação. O site é responsivo para atender diferentes tamanhos de tela. Linguagens: Javascript, Typescript, React, NextJs, Tailwindcss',
      links: [
        {
          name: 'Conheça o site',
          href: 'https://dance-group-website-template.vercel.app/',
        },
      ]
    },    {
      src: 'assets/img/projects/drinkswebsite.png',
      alt: 'Website com receitas de drinks diversos',
      title: 'Websites com receitas de drinks diversos',
      description: 'Este projeto é um aplicativo web com responsividade que oferece ao usuário receitas de diferentes drinks e cocktails. Para esta aplicação foi utilizada a api pública disponibilizada pelo site The CocktailDb. Buscou-se criar uma aplicação colorida e descontraída, com cores neons, baseado no estilo cyberpunk. Linguagens: Javascript, Typescript, React, NextJs, Tailwindcss.',
      links: [
        {
          name: 'Conheça o site',
          href: 'https://drinks-website.vercel.app/',
        },
      ]
    }

   ])

   public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
   }
}
