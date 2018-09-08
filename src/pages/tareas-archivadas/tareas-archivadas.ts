import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';


@IonicPage()
@Component({
  selector: 'page-tareas-archivadas',
  templateUrl: 'tareas-archivadas.html',
})
export class TareasArchivadasPage {
  tareasArchivadas = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private servicioTareas: TareaProvider) {
  }

  ionViewDidLoad() {
    this.tareasArchivadas = this.servicioTareas.obtenerTareasArchivadas();
  }

}
