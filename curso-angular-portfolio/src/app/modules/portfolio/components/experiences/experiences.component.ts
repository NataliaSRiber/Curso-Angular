import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Full Stack',
        p: 'Alô Bebê | Març 2022 - Abr 2023',
      },
      text: '<p>Responsável pela arquitetura e desenvolvimento do lado do cliente e do servidor, na implementação de novas funcionalidades e melhorias no e-commerce da empresa. Também atuei ativamente na criação da intranet a fim de atender a demandas específicas e melhorar a eficiência operacional da empresa.</p>',
    },
  ])
}
