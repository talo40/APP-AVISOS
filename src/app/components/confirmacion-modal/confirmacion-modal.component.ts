import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmacion-modal',
  templateUrl: './confirmacion-modal.component.html',
  styleUrls: ['./confirmacion-modal.component.scss'],
  standalone: false,
})
export class ConfirmacionModalComponent implements OnInit {
  @Input() tituloPub: string = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cancelar() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirmar() {
    return this.modalCtrl.dismiss(true, 'confirm');
  }
}
