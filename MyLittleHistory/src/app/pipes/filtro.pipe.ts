import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
/*Aqui mandamos los valores que va a filtrar */
  transform(arreglo: any[],
            texto: string,
            columna: string): any[] {

    if (texto === '') {
      return arreglo;
    }

    texto = texto.toLowerCase();
/*el item title es lo que va tomar como pioritario buscar*/ 
    return arreglo.filter( item => {
      return item[columna].toLowerCase()
              .includes (texto);
    });

  }

}
