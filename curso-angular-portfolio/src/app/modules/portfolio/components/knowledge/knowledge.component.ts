import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'html5 icon',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'css3 icon',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'javascript icon',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'angular icon',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'nodejs icon',
    },
  ])
}
