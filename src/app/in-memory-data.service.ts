import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const users = [
      { id: 11, firstName: 'Juan', lastName: 'Perez', email: 'test123@gmail.com', password: 'welcome',
    bio: 'this is my bio', role: 'admin', image: 'user-1.jpg' },
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
        tagline: 'My thoughts',
        title: 'Thoughts become things',
        description: 'We are and amazing company',
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
      {id: 8, title: 'Blog', link: '/blog', outlet: ''},
      {id: 9, title: 'Contact Us', link: 'contactus', outlet: 'popup'},
      {id: 10, title: 'Subscribe', link: 'subscribe', outlet: 'popup'},
    ];

    const posts = [
      {id: 1, title: 'The first Article',
      author: 'AD', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 2, title: 'The second Article',
      author: 'AD', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 3, title: 'The third Article',
      author: 'AD', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 4, title: 'The fourth Article',
      author: 'AD', image: 'gallery-image-4.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 5, title: 'The fifth Article',
      author: 'AD', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 6, title: 'The sixth Article',
      author: 'AD', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 7, title: 'The seven Article',
      author: 'AD', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 8, title: 'The eight Article',
      author: 'AD', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 9, title: 'The nine Article',
      author: 'AD', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 10, title: 'The ten Article',
      author: 'AD', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 11, title: 'The eleven Article',
      author: 'AD', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
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

/*
  post(reqInfo: RequestInfo) {

    if (reqInfo.id === 'login') {
      console.log('from login');
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(user => {
          return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password ;
        });

        let responseBody = {};

        if (users) {
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            bio: users.bio,
            image: users.image,
            email: users.email,
            token: this.getToken(users)
          };
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
          status: 404
        };

        options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;


      });


    } else if (reqInfo.id === 'signup') {
      reqInfo.id = null;
      console.log(' from signup');
    }
  }*/

}
