import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productos = [
    {
      nombre: 'Chocolate crema de Maní y Leche',
      img: '../../assets/images/Chocolate-Leche-y-Mani.jpg.png',
      mensaje: 'Lo más delicioso del maní se hace presente, esto junto con la dulzura de la leche envuelta en un chocolate, eso representa el chocolate de Maní y Leche, no te lo pierdas!.'
    },
    {
      nombre: 'Chocolate y Ron 70%',
      img: '../../assets/images/Chocolate-Ron-65.jpg.png',
      mensaje: 'Venezuela se distingue por su increíble naturaleza tropical, su gente, lo exquisito de su ron y lo divino de su cacao considerado el mejor cacao del mundo, un trocito de Venezuela en un cacao.'
    },
    {
      nombre: 'Chocolate Oscuro 61.9%',
      img: '../../assets/images/Chocolate-61.9-Cacao.jpg.png',
      mensaje: 'Este chocolate nos encanta por su sabor equilibrado del cacao, hecho para los que quieren los beneficios del cacao sin perder su dulzura.'
    },
    {
      nombre: 'Chocolate Leche y Café',
      img: '../../assets/images/Chocolate-Leche-y-Cafe.jpg.png',
      mensaje: 'Café de nuestro origen esto marca la diferencia trocitos de café tostado lo delicioso del chocolate lo cremoso de la leche y los aromas del café, un chocolate para competir.'
    },
    {
      nombre: 'Chocolate Leche y Menta',
      img: '../../assets/images/Chocolate-Leche-y-Menta.jpg.png',
      mensaje: 'Una versión diferente, un chocolate para disfrutarlo con todos los sentidos, la sensualidad hecha chocolate.'
    },
    {
      nombre: 'Chocolate Dulce de Leche',
      img: '../../assets/images/Chocolate-Dulce-de-Leche.jpg.png',
      mensaje: 'Aquí comienza la magia de un chocolate, la combinación del dulce de leche bañado en chocolate oscuro buscado la intensidad del chocolate y lo subyacente del dulzor.'
    },
    {
      nombre: 'Chocolate Leche y Galleta',
      img: '../../assets/images/Chocolate-Leche-y-Galletas.jpg.png',
      mensaje: 'Nuestras crujientes galletas caseras, crean una divertida y deliciosa experiencia de un crunchy que querrás repetir.'
    },
    {
      nombre: 'Chocolate Mango',
      img: '../../assets/images/Chocolate-Mango.jpg.png',
      mensaje: 'La mezcla del sabor de un buen Chocolate junto al dulce del mango son la formula perfecta que componen este chocolate.'
    },
    {
      nombre: 'Chocolate de Parchita y Piña',
      img: '../../assets/images/Chocolate-Parchita-y-Pina.jpg.png',
      mensaje: 'Para los amantes del ácido, llega la unión del cítrico con el placer del cacao en este chocolate de parchita y piña.'
    },
    {
      nombre: 'Chocolate Pie de Limón',
      img: '../../assets/images/Chocolate-Pie-de-Limon.jpg.png',
      mensaje: 'El increíble saber de una buena trata de limón, traída en una tableta de chocolate, ¡no dejes de probarla! de seguro te encantará.'
    },
    {
      nombre: 'Chocolate Tres Leches',
      img: '../../assets/images/Chocolate-Tres-Leches.jpg.png',
      mensaje: 'Este chocolate trae lo mejor de dos ricos postres: el pastel tres leches y el sabor de un buen chocolate. Una verdadera delicia, no puedes dejar de probarlo.'
    },
    {
      nombre: 'Chocolate Naranja y Galletas',
      img: '../../assets/images/Chocolate-Trocitos-de-Naranjas-y-Galletas.jpg.png',
      mensaje: 'Una verdadera fiesta de sabores almacenada en una tableta de chocolate, ideal para los amantes de la variedad. Despierta tus sentidos y pruébalo ya!.'
    },
    {
      nombre: 'Rocas de Chocolate',
      img: '../../assets/images/Rocas-De-Chocolate.png',
      mensaje: 'Alegra tu día con esta dulzura hecha chocolate, práctico para llevarlo donde quieras. Definitivamente las rocas de chocolate están hechas para tí!.'
    }
]

  

  productoSeleccionado: number;

  constructor() { }

  setData(){
    return this.productos;
  }

  setOrder(name:string, quantity: number, product) {

  }
}
