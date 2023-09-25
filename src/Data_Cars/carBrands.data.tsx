import imgMercedes from '../containers/Cars/img/mercedes.jpg';
import imgBmw from '../containers/Cars/img/bmw.jpg';

export type ModelDataType = {
  id: number;
  name: string;
  price: string;
  image: string;
  url: string;
};

export type BrandDataType = {
  name: string;
  img: string;
  models: ModelDataType[];
};

export const CarBrands: BrandDataType[] = [
  {
    name: "mercedes",
    img: imgMercedes,
    models: [
      {
        id: 1,
        name: "Mercedes-Benz-S",
        price: "45.400 $",
        image:
          "https://avatars.mds.yandex.net/get-verba/787013/2a0000017c373735fe07cbba9aadd3f022fc/cattouchret",
        url: "https://en.wikipedia.org/wiki/Mercedes-Benz_S-Class",
      },
      {
        id: 2,
        name: "Mercedes-Benz-A",
        price: "36.420 $",
        image:
          "https://imgd.aeplcdn.com/1200x900/n/cw/ec/148959/mercedes-benz-a-class-limousine-left-front-three-quarter0.jpeg?isig=0",
        url: "https://en.wikipedia.org/wiki/Mercedes-Benz_A-Class",
      },
      {
        id: 3,
        name: "Mercedes-Benz-T",
        price: "32.400 $",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3d4014f2cd113a98a1277a40a355c836.jpg",
        url: "https://en.wikipedia.org/wiki/Mercedes-Benz_Citan#Second_generation_(W420;_2021)",
      },
      {
        id: 4,
        name: "Mercedes-Benz-B",
        price: "27.400 $",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZuqo7HtdkxT8bvpWyklsRoR6X2XLzQ0cnbp2OaDEb4bl40GeGO9kDAfT1NKeq8Jyid4&usqp=CAU",
        url: "https://en.wikipedia.org/wiki/Mercedes-Benz_B-Class",
      },
      {
        id: 5,
        name: "Mercedes-Benz-C",
        price: "21.400 $",
        image:
          "https://cdni.autocarindia.com/ExtraImages/20210223072553_Mercedes_Benz_C_class_2021_front.jpg",
        url: "https://ru.wikipedia.org/wiki/Mercedes-Benz_C-%D0%BA%D0%BB%D0%B0%D1%81%D1%81",
      },
      {
        id: 6,
        name: "Mercedes-Benz-D",
        price: "9.400 $",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Vw_passat_b1_v_sst.jpg",
        url: "https://ru.wikipedia.org/wiki/D-%D0%BA%D0%BB%D0%B0%D1%81%D1%81",
      },
    ],
  },
  {
    name: "bmw",
    img: imgBmw,
    models: [
      {
        id: 1,
        name: "BMW series 1",
        price: "45.400 $",
        image:
          "https://a.storyblok.com/f/143588/2100x1330/865a612882/fbd9a5b0-235b-4620-9ba1-a191e23eaf3b_bmw1series.jpg",
        url: "https://en.wikipedia.org/wiki/BMW_1_Series",
      },
      {
        id: 2,
        name: "BMW series 2",
        price: "36.420 $",
        image:
          "https://s.auto.drom.ru/i24238/c/photos/fullsize/bmw/2-series/bmw_2-series_921243.jpg",
        url: "https://en.wikipedia.org/wiki/BMW_2_Series",
      },
      {
        id: 3,
        name: "BMW series 3",
        price: "32.400 $",
        image:
          "https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg",
        url: "https://en.wikipedia.org/wiki/BMW_3_Series",
      },
      {
        id: 4,
        name: "BMW series 4",
        price: "27.400 $",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/2021-bmw-m440i-xdrive-coupe-109-1602004315.jpg?crop=0.636xw:0.716xh;0.0737xw,0.252xh&resize=640:*",
        url: "https://en.wikipedia.org/wiki/BMW_4_Series",
      },
      {
        id: 5,
        name: "BMW series 5",
        price: "21.400 $",
        image:
          "https://cdn.leasing.com/cms/bmw-5-series-2023-front-styling.jpg",
        url: "https://en.wikipedia.org/wiki/BMW_5_Series",
      },
      {
        id: 6,
        name: "BMW series 6",
        price: "9.400 $",
        image:
          "https://www.bmw-kz.com/content/dam/bmw/common/all-models/6-series/gran-turismo/2021/highlights/bmw-6-series-gran-turismo-gallery-video-design-01.jpg",
        url: "https://en.wikipedia.org/wiki/BMW_6_Series",
      },
    ],
  },
];
