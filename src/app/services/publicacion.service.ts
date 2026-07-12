import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Publicacion } from '../models/publicacion.model';

const STORAGE_KEY = 'publicaciones_storage';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  private publicaciones: Publicacion[] = [];

  constructor() { }

  async loadPublicaciones(): Promise<Publicacion[]> {
    const { value } = await Preferences.get({ key: STORAGE_KEY });
    this.publicaciones = value ? JSON.parse(value) : [];
    return this.publicaciones;
  }

  async addPublicacion(publicacion: Publicacion): Promise<void> {
    this.publicaciones.unshift(publicacion);
    await this.save();
  }

  async deletePublicacion(id: string): Promise<void> {
    this.publicaciones = this.publicaciones.filter(p => p.id !== id);
    await this.save();
  }

  private async save(): Promise<void> {
    await Preferences.set({
      key: STORAGE_KEY,
      value: JSON.stringify(this.publicaciones)
    });
  }
}
