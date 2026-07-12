import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Publicacion } from '../../models/publicacion.model';

@Component({
  selector: 'app-publicacion-list',
  templateUrl: './publicacion-list.component.html',
  styleUrls: ['./publicacion-list.component.scss'],
  standalone: false,
})
export class PublicacionListComponent implements OnInit {
  @Input() publicaciones: Publicacion[] = [];
  @Output() onDelete = new EventEmitter<Publicacion>();

  constructor() { }

  ngOnInit() {}

  deletePublicacion(pub: Publicacion) {
    this.onDelete.emit(pub);
  }
}
