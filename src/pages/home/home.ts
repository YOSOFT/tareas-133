import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController} from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tareas = [];
  constructor(
    public navCtrl: NavController,
    private alerta: AlertController,
    private servicioTareas: TareaProvider,
    private toast: ToastController
  ) {
    this.tareas = servicioTareas.obtenerTareas();
  }
  agregarTarea(){
    let alert = this.alerta.create({
      title: "Agregar tarea",
      inputs: [{
        type: "text",
        name: "textoTarea"
      }],
      buttons:[
        {
          text: "Cancelar"
        },
        {
          text: "Agregar",
          handler: (datos) => {
            // console.log(datos);
            // this.tareas.push(datos.textoTarea);
            this.servicioTareas.agregarTarea(datos.textoTarea);
            let toast = this.toast.create({
              message: "Tarea agregada exitosamente",
              duration: 2000
            });
            toast.present();
          }
        }
      ]
    });
    alert.present();

    // console.log(this.tareas);
  }
  archivarTarea(indiceTarea){
    console.log(indiceTarea);
    this.servicioTareas.archivarTarea(indiceTarea);
  }
  editarTarea(indiceTarea){
    let alert = this.alerta.create({
      title: "Editar tarea",
      inputs: [ {
        type: "text",
        name: "textoEditarTarea",
        value: this.tareas[indiceTarea]
      }],
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Guardar",
          handler: (datos) => {
            this.servicioTareas.editarTarea(indiceTarea, datos.textoEditarTarea );
          }
        }
      ]
    });
    alert.present();
  }
  ordenarLista(evento){
    console.log(evento);
    reorderArray(this.tareas, evento);
  }
}
