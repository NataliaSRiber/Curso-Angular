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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nibh tortor. Pellentesque rutrum commodo massa eget laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget sapien sed quam sodales luctus nec vel odio. Aliquam mattis purus nisi, id semper nibh pulvinar eget. Donec et erat ligula. Donec accumsan mi libero, sit amet cursus neque semper nec. Praesent et maximus mi. Aliquam id velit dapibus, elementum mi vitae, sollicitudin mauris. Praesent tincidunt sit amet massa vitae molestie.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nibh tortor. Pellentesque rutrum commodo massa eget laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget sapien sed quam sodales luctus nec vel odio. Aliquam mattis purus nisi, id semper nibh pulvinar eget. Donec et erat ligula. Donec accumsan mi libero, sit amet cursus neque semper nec. Praesent et maximus mi. Aliquam id velit dapibus, elementum mi vitae, sollicitudin mauris. Praesent tincidunt sit amet massa vitae molestie.',
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
