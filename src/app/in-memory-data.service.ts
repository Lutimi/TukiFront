import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const users = [
      { id: 11, firstName: 'Frank', lastName: 'Popovic', email: 'test123@gmail.com',   password: 'welcome',
    bio: 'Explorador, aventurero esas son las palabras que me definen, me apasioona viajar por el mundo conociendo nuevas culturas y lugares. Soy abierto a conocer a todos, Conoceme más en la red de tuki.   Mi numero:+51989302415 Facebook: @Frankpopovic  Instagram: @Frank.Popo.vic'
        , role: 'admin', image: 'user-4.jpg' },
      { id: 12, firstName: 'rohan', lastName: 'gupta', email: 'test345@gmail.com', password: 'welcome',
      bio: 'i am a subscriber', role: 'subscriber', image: 'user-2.jpg' }
    ];

    const pages = [
      {id: 'intro',
        tagline: 'SUCESS',
        title: 'Desbloquea precios y promociones de viajes increibles',
        description: 'Tu acompañante de viajes!',
      },
      {id: 'clients',
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Our clients',
      },
      {id: 'services',
        tagline: 'Choqueriao, Cuzco',
        title: 'Reto Semanal',
        description: 'Cumple retos y obten promociones especiales'
      },
      {id: 'testimonials',
        tagline: 'Estos son nuestros',
        title: 'What our customers are saying',
        description: 'This is what our customer\'s feel about us',
      },
      {id: 'pricing',
        tagline: 'TU ELECCION',
        title: 'Descuentos Especiales',
        description: '',
      },
      {id: 'gallery',
        tagline: 'We ❤ Doing amazing things',
        title: 'AdMISTER STUDIO',
        description: 'We are and amazing company',
      },
      {id: 'footer',
        copyrighttext: 'Made with ❤ by',
        developer: 'AdMISTER STUDIO',
        developerlink: 'http://admister.in',
      },
      {id: 'blog',
        tagline: '2019',
        title: 'Mis viajes / Rutas recorridas ',
        description: 'Grande caminos por recorrer',
      },
      {id: 'header',
        heading: 'AdMister Studios',
        headingtext: 'This website was created using Angular 6',
        buttontext: 'do some action!',
        buttonlink: '/home',
        image: 'banner-image-1.jpg'
      },
    ];


    const features = [
      {id: 1, icon: '', title: 'Te premia',
      description: 'Tuki es la primer APP que te premia por salir de casa'},
      {id: 2, icon: 'bolt', title: 'Full Descuentos',
      description: 'Desbloquea promociones o precios especiales en locales, restaurantes y tiendas de todo el pais!'},

  ];

  const images = [
    {id: 1, name: 'gallery-image-1.jpg'},
    {id: 2, name: 'gallery-image-2.jpg'},
    {id: 3, name: 'gallery-image-3.jpg'},
    {id: 4, name: 'gallery-image-4.jpg'},
    {id: 5, name: 'gallery-image-5.jpg'},
    {id: 6, name: 'gallery-image-6.jpg'},
];


    const menu = [
      {id: 1, title: 'Home', link: '/home', outlet: ''},
      {id: 2, title: 'About', link: '/about', outlet: ''},
      {id: 3, title: 'Retos', link: '/services', outlet: ''},

      {id: 5, title: 'Destinos', link: '/testimonials', outlet: ''},

      {id: 7, title: 'Descuentos', link: '/pricing', outlet: ''},
      {id: 8, title: 'Mis rutas', link: '/blog', outlet: ''},
      {id: 9, title: 'Contact Us', link: 'contactus', outlet: 'popup'},
      {id: 10, title: 'Subscribe', link: 'subscribe', outlet: 'popup'},
    ];

    const posts = [
      {id: 1, title: 'Machu Pichu',
      author: 'Frank Popovic', image: 'machupichu.jpg', publishdate: '2019-06-19T07:22Z', excert: 'Una cultura increible, recorri el camino inca sobre el cual muchas personas me hablaban...'},
      {id: 2, title: 'Mexico',
      author: 'Frank Popovic', image: 'mexico.jpeg', publishdate: '2019-08-25T07:22Z', excert: 'Llegamos a CDMX el día 1 y alijamos en un depto alquilado por 20 días. Primero visitamos el Museo de Antropología de CDMX, lo cual fue un estupendo inicio porque ahí aprndeimos mucho sobre las culturas pre-hispánicas. Luego el Castillo de Chapultepec, donde aprendimos mocho sobre la historia de los Estados Unidos Mexicanos, luego el Zócalo y el centgro histórico, salimos de CDMX para visitar un Santuario de Mariposas Monarca,viajamos a Puebla, San Miguel de Allende, Guanajuato y Taxco. En los ultimos días, recorrimos los murales de Diego Rivera, Orozco y Sequeira, visitamos la Casa Azul de Frida Kahlo y navegamos los canales de Xochimilco.'},
      {id: 3, title: 'San Francisco',
      author: 'Frank Popovic', image: 'sanfrancisco.jpg', publishdate: '2019-10-05T07:22Z', excert: 'Como viaje se lo recomiendo a todo el mundo. Una ruta imprescindible para recorrer California y ver desde grandes ciudades con LA o la increible San Francisco, hasta paisajes inolvidables como el Gran Cañon o Monument Valley. Lo disfrutamos sin duda.'},

  ];

  const companies = [
    {id: 1 , name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png'},
    {id: 2 , name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png'},
    {id: 3 , name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png'},
    {id: 4 , name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png'},
    {id: 5 , name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png'},
    {id: 6 , name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png'},
    {id: 7 , name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png'},
    {id: 8 , name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png'},
    {id: 9 , name: 'Cold', weblink: 'company-logo9.png', logo: 'company-logo9.png'},
];
const feedbacks = [
  {id: 1 , name: 'Laguna de Salinas', userimage: 'user-1.jpg',
  comments: 'Esta laguna es explotada desde tiempos inmemorables, por los indiginas de los pueblos vecinos y en especial por los del ubinas, en procura del cloruro de sodio(sal) que se destino al arte culinario de los departamentos del sur',
  company: 'Arequipa'},
  {id: 2 , name: 'Arequipa y el cañon del Colca', userimage: 'user-2.jpg',
  comments: 'La actividad principal en esta zona es ver el vuelo de los condores, el ave no marina más grande del mundo y lo que alcanza mayor altura',
  company: 'Arequipa'},
  {id: 3 , name: 'Iquitos', userimage: 'user-3.jpg',
  comments: 'Quienes disfrutan del esotaurismo en esta zona suelen ser del tipo aventurero y curioso, que soporta altas y humedas temperaturas, insectos molestos y comida exotica',
  company: 'Selva'},
];

const plans = [
  {id: 1, title: 'Kuelap, Amazonas', subtitle: 'Descuento',
  description: 'TUKI plan inicial', price: '20', currency: '%',
  downloads: 'Fue construido por la cultura Chachapoyas(80 d.c al 1470 d.c) pero posteriormente fue ocupado por los incas. Está ubicado sobre la cima de la colina Barreta, en los Andes nor orientes del Peru, en la region Amazonas',
  buttontext: 'Ver Detalles', buttonlink: '#', featured: false
  },
  {id: 2, title: 'Lineas de Nazca', subtitle: 'Descuento',
  description: 'TUKI plan medio', price: '40', currency: '%',
  downloads: 'Las lineas de Nazca son un grupo de antiguos geoglifos grabados en la arena del desierto. Estan ubicados en el valle de Nazca, valle de Palpa y en el desierto de Jumana ',
  buttontext: 'Ver Detalles', buttonlink: '#', featured: true
  },
  {id: 3, title: 'Islas Ballestas', subtitle: 'Descuento',
  description: 'TUKI Dominador', price: '30', currency: '%',
  downloads: 'estas islas son el hogar de miles de aves guaneras y especies marinas: Lobos Marinos, pinguinos de humboldt, pelicanos, leones marinos',
  buttontext: 'Ver Detalles', buttonlink: '#', featured: false
  }
];

const websites = [
  {id: 1, link: 'https://facebook.com/', title: 'Facebook', target: '_blank', username: 'Tukiviajes', icon: 'facebook'},
  {id: 2, link: 'https://instagram.com/', title: 'Instagram', target: '_blank', username: 'tuki_aventuras', icon: 'instagram'},
  {id: 3, link: 'https://twitter.com/', title: 'Twitter', target: '_blank', username: 'tuki_viajes', icon: 'twitter'},



];

    return {users, posts, menu, pages, features, images, companies, feedbacks, plans, websites};
  }

getToken(user) {
  return 'this is a token';
}

get (reqInfo: RequestInfo) {
  if (reqInfo.collectionName === 'posts') {
    return this.getArticles(reqInfo);
  }
  return undefined;
}

getArticles(reqInfo: RequestInfo) {

  return reqInfo.utils.createResponse$(() => {
    const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
    const collection = reqInfo.collection;
    const id = reqInfo.id;
    const data = id === undefined ? collection : reqInfo.utils.findById(collection, id);

    console.log(data);

    const options: ResponseOptions = data ?
    {
      body: dataEncapsulation ? { data } : data,
      status: 200
    } :
    {
      body: { error: `Post not found` },
      status: 404
    };

    options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
    options.headers = reqInfo.headers;
    options.url = reqInfo.url;
    return options;


  });
}

}
