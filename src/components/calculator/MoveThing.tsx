'use client';
import { useSelector } from 'react-redux';

import {
  selectTruckItems,
  selectTruckVolume,
} from '../../features/truck/truckSlice';

import { ThingCard } from './ThingCard';
import Image from 'next/image';

const articles = [
  {
    title: 'Cama Individual',
    volume: 180,
    image: '/assets/images/calculator/single-bed.png',
  },
  {
    title: 'Cama Queen',
    volume: 250,
    image: '/assets/images/calculator/bed-queen.png',
  },
  {
    title: 'Cama King',
    volume: 300,
    image: '/assets/images/calculator/bed-queen.png',
  },
  {
    title: 'Cuna',
    volume: 200,
    image: '/assets/images/calculator/crib.png',
  },
  {
    title: 'Gabinete Pequeño',
    volume: 200,
    image: '/assets/images/calculator/bureau.png',
  },
  {
    title: 'Gabinete',
    volume: 400,
    image: '/assets/images/calculator/closet.png',
  },
  {
    title: 'Cómoda',
    volume: 300,
    image: '/assets/images/calculator/buffet.png',
  },
  {
    title: 'Estantes',
    volume: 300,
    image: '/assets/images/calculator/book-shelf.png',
  },
  {
    title: 'Lavadora',
    volume: 200,
    image: '/assets/images/calculator/washing-machine.png',
  },
  {
    title: 'Secadora',
    volume: 200,
    image: '/assets/images/calculator/secadora.png',
  },
  {
    title: 'Lavavajilla',
    volume: 200,
    image: '/assets/images/calculator/dishwasher.png',
  },
  {
    title: 'Cocina',
    volume: 200,
    image: '/assets/images/calculator/cooker.png',
  },
  {
    title: 'Horno de Mesa',
    volume: 150,
    image: '/assets/images/calculator/toaster-oven.png',
  },
  {
    title: 'Parillera',
    volume: 200,
    image: '/assets/images/calculator/grill.png',
  },
  {
    title: 'Nevera Pequeña',
    volume: 150,
    image: '/assets/images/calculator/refrigerador.png',
  },
  {
    title: 'Nevera Mediana',
    volume: 200,
    image: '/assets/images/calculator/fridge.png',
  },
  {
    title: 'Nevera Grande',
    volume: 400,
    image: '/assets/images/calculator/refrigerador-big.png',
  },
  {
    title: 'Sofa 1 puestos',
    volume: 100,
    image: '/assets/images/calculator/armchair.png',
  },
  {
    title: 'Sofa 2 puestos',
    volume: 200,
    image: '/assets/images/calculator/living-room.png',
  },
  {
    title: 'Sofa 3 puestos',
    volume: 400,
    image: '/assets/images/calculator/sofa-3-plazas.png',
  },
  {
    title: 'Silla',
    volume: 100,
    image: '/assets/images/calculator/silla.png',
  },
  {
    title: 'Mesa',
    volume: 400,
    image: '/assets/images/calculator/table.png',
  },
  {
    title: 'Silla de Oficina',
    volume: 100,
    image: '/assets/images/calculator/office-chair.png',
  },
  {
    title: 'Escritorio y silla',
    volume: 400,
    image: '/assets/images/calculator/desk.png',
  },
  {
    title: 'HD TV',
    volume: 100,
    image: '/assets/images/calculator/hdtv.png',
  },
  {
    title: 'Radio',
    volume: 100,
    image: '/assets/images/calculator/radio.png',
  },
  {
    title: 'Caja 40 X 40',
    volume: 100,
    image: '/assets/images/calculator/box-small.png',
  },
  {
    title: 'Caja 70 X 70',
    volume: 150,
    image: '/assets/images/calculator/box-middle.png',
  },
  {
    title: 'Caja 100 X 100',
    volume: 150,
    image: '/assets/images/calculator/box-big.png',
  },
];

type Props = {};

export const MoveThing = (props: Props) => {
  const selectedItems = useSelector(selectTruckItems);
  const selectedVolume = useSelector(selectTruckVolume);

  const calcVolumen = () => {
    if (1500 < selectedVolume && selectedVolume < 4000) {
      return 'Camión Mediano';
    }
    if (4000 < selectedVolume) {
      return 'Camión Grande';
    }

    return 'Vehículo Pequeño';
  };
  return (
    <section className="px-4 py-8">
      <h1 className="text-center text-3xl text-white mb-8">
        Selecciona los Elementos que vas a mudar
      </h1>

      <div className="grid  md:grid-cols-[minmax(120px,_1fr)_300px] gap-2">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,_1fr))] gap-2 p-4">
          {articles.map((article) => {
            return <ThingCard thing={article} key={article.title} />;
          })}
        </div>

        {/*  */}
        <article className="relative p-4 rounded-lg bg-neutral-100">
          <h2 className="text-lg text-center font-semibold mb-4 ">
            Seleccionados
          </h2>
          {selectedItems.map((item) => {
            return (
              <div key={item.title} className="flex items-center space-x-2 ">
                <span> {item.qty}</span>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                />
                <div className="flex flex-1 justify-between">
                  <span className="text-xs"> {item.title}</span>
                  <span>{item.qty * item.volume}</span>
                </div>
              </div>
            );
          })}
          <p className="absolute bottom-0 left-0 w-full bg-primary-800 text-left text-white px-4">
            Necesitas : {calcVolumen()}
          </p>
        </article>
      </div>
    </section>
  );
};
