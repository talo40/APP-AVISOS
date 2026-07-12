import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PublicacionService } from '../services/publicacion.service';
import { Publicacion } from '../models/publicacion.model';
import { ConfirmacionModalComponent } from '../components/confirmacion-modal/confirmacion-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  publicaciones: Publicacion[] = [];

  constructor(
    private publicacionService: PublicacionService,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    this.publicaciones = await this.publicacionService.loadPublicaciones();
  }

  async onAddPublicacion(pub: Publicacion) {
    await this.publicacionService.addPublicacion(pub);
    this.publicaciones = await this.publicacionService.loadPublicaciones();
  }

  async onDeletePublicacion(pub: Publicacion) {
    const modal = await this.modalCtrl.create({
      component: ConfirmacionModalComponent,
      componentProps: { tituloPub: pub.titulo }
    });
    
    await modal.present();
    
    const { role } = await modal.onDidDismiss();
    
    if (role === 'confirm') {
      await this.publicacionService.deletePublicacion(pub.id);
      this.publicaciones = await this.publicacionService.loadPublicaciones();
    }
  }
}
