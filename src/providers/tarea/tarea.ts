import { Injectable } from '@angular/core';

/*
  Generated class for the TareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaProvider {
  tareas = [];
  tareasArchivadas = [];
  constructor() {
    console.log('Hello TareaProvider Provider');
  }

  obtenerTareas(){
    return this.tareas;
  }


  agregarTarea(tarea){
    this.tareas.push(tarea);
  }

  editarTarea(){

  }

  obtenerTareasArchivadas(){
    return this.tareasArchivadas;
  }

  archivarTarea(indiceTarea){
    this.tareasArchivadas.push(this.tareas[indiceTarea]);
    console.log("tareas arc",this.tareasArchivadas);
    this.tareas.splice(indiceTarea,1);
    console.log("tareas",this.tareas);
  }

}
