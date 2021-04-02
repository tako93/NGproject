import { Injectable } from '@angular/core';
import { Icars } from './cars';


@Injectable({
    providedIn: 'root',
})


export class CarsService {



  getCars(): Icars[] {

 return [
    {
      imageUrl: 'https://cars.usnews.com/pics/size/640x420/static/images/article/202101/127424/2015_BMW_Z4_1.jpg',
      model: 'BMW Z4',
      year: 2015,
      price: '$27,765 - $37,396',
    },
    {
      imageUrl: 'https://cars.usnews.com/pics/size/640x420/static/images/article/202101/127424/2015_BMW_X4.jpg',
      model: 'BMW X4',
      year: 2015,
      price: '$28,487 - $31,220',
    },
    {
      imageUrl: 'https://cars.usnews.com/pics/size/640x420/static/images/article/202101/127424/2019_BMW_X7.jpg',
      model: 'BMW X7',
      year: 2019,
      price: '$73,900 - $92,600',
    },
    {
      imageUrl: 'https://cars.usnews.com/pics/size/640x420/static/images/article/202101/127424/2018_BMW_3_Series.jpg',
      model: 'BMW 3 Series',
      year: 2018,
      price: '$29,986 - $56,614',
    },
    {
      imageUrl: 'https://cars.usnews.com/pics/size/640x420/static/images/article/202101/127424/2018_7_Series.jpg',
      model: ' BMW 7',
      year: 2018,
      price: '$67,211 - $129,972',
    },
    {
      imageUrl: 'https://cars.usnews.com/pics/size/640x420/static/images/article/202101/127424/2015_BMW_6_Series.jpg',
      model: 'BMW 6 Series',
      year: 2015,
      price: '$36,912 - $62,790',
    },
    {
      imageUrl: 'https://cars.usnews.com/pics/size/640x420/static/images/article/202101/127424/2015_BMW_i3.jpg',
      model: 'BMW i3',
      year: 2015,
      price: '$17,636 - $18,788',
    },
    {
      imageUrl: 'https://cars.usnews.com/pics/size/640x420/static/images/article/202101/127424/2015_BMW_X5_M_.jpg',
      model: 'BMW X5',
      year: 2015,
      price: '$32,373 - $60,571',
    },
    {
      imageUrl: 'https://cars.usnews.com/pics/size/640x420/static/images/article/202101/127424/2015_BMW_4_Series.jpg',
      model: 'BMW 4 Series',
      year: 2015,
      price: ' $22,196 - $50,136',
    },
    {
      imageUrl: 'https://cars.usnews.com/pics/size/640x420/static/images/article/202101/127424/2015_BMW_X3_1.jpg',
      model: 'BMW X3',
      year: 2015,
      price: '$24,171 - $28,796',
    },


  ]}

}

