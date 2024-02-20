'use client';

import { Icon } from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useMediaQuery } from "react-responsive"
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";
import Image from "next/image";
import dynamic from "next/dynamic";

//leaflet css
import 'leaflet/dist/leaflet.css'

// const LeafletCss = dynamic(() => import('leaflet/dist/leaflet.css'), {
//   ssr: false,
// })


const markers = [
  {
    position:[38.84105985379219, -77.12007689361192],
    title: 'Location 1',
    subtitle: 'Lorem ipsum dolor sit amer. Lorem ipsum!',
    image: '/map/1.png',
  },
  // {
  //   position:[38.85105987378217, -77.17007684365189],
  //   title: 'Location 2',
  //   subtitle: 'Lorem ipsum dolor sit amer. Lorem ipsum!',
  //   image: '/map/2.png',
  // },
  // {
  //   position:[38.83105985379224, -77.15007689361195],
  //   title: 'Location 3',
  //   subtitle: 'Lorem ipsum dolor sit amer. Lorem ipsum!',
  //   image: '/map/3.png',
  // },
];

const customIcon = new Icon ({
  iconUrl:'/pin-solid.svg',
  iconSize: [40,40],
});

const Map = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2 }}
      className='relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20' 
      id='contact'
    >
      {/* <LeafletCss /> */}
      <MapContainer 
        center={[38.84105985379219, -77.12007689361192]} 
        zoom={isMobile ? 10 : 12} 
        className={`${isMobile ? 'h-[300px]':'h-[900px]'} z-10`}
        zoomControl={false}
      >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' />

        {/* markers */}
        {markers.map((marker, index) => {
          return(
            <Marker 
              key={index} 
              position={marker.position} 
              icon={customIcon}
            >
              <Popup>
                <div className='flex gap-x-[30px] items-center'>
                  <div className='flex-1'>
                    <h3>{marker.title}</h3>
                    <p className='leading-snug'>{marker.subtitle}</p>
                  </div>
                  <div className='flex-1'>
                    <Image 
                      src={marker.image} 
                      width={140} 
                      height={170} 
                      alt='' 
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}

      </MapContainer>
    </motion.section>
  )
}

export default Map;