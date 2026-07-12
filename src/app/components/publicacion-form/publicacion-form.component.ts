import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Publicacion } from '../../models/publicacion.model';

@Component({
  selector: 'app-publicacion-form',
  templateUrl: './publicacion-form.component.html',
  styleUrls: ['./publicacion-form.component.scss'],
  standalone: false,
})
export class PublicacionFormComponent implements OnInit {
  @Output() onSave = new EventEmitter<Publicacion>();
  publicacionForm: FormGroup;
  fotoBase64?: string;

  constructor(private fb: FormBuilder) {
    this.publicacionForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  ngOnInit() {}

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });
      this.fotoBase64 = `data:image/jpeg;base64,${image.base64String}`;
    } catch (e) {
      console.error('Error al capturar la foto', e);
    }
  }

  save() {
    if (this.publicacionForm.valid) {
      const formValue = this.publicacionForm.value;
      const newPub: Publicacion = {
        id: Date.now().toString(),
        titulo: formValue.titulo,
        descripcion: formValue.descripcion,
        foto: this.fotoBase64,
        fecha: new Date().toISOString()
      };
      this.onSave.emit(newPub);
      this.publicacionForm.reset();
      this.fotoBase64 = undefined;
    }
  }
}
