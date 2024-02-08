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
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nibh tortor. Pellentesque rutrum commodo massa eget laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget sapien sed quam sodales luctus nec vel odio. Aliquam mattis purus nisi, id semper nibh pulvinar eget. Donec et erat ligula. Donec accumsan mi libero, sit amet cursus neque semper nec. Praesent et maximus mi. Aliquam id velit dapibus, elementum mi vitae, sollicitudin mauris. Praesent tincidunt sit amet massa vitae molestie.',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
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
