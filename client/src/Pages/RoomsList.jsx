import React from 'react';
import RoomListHeader from '../Components/RoomListHeader';
import RoomListBanner from '../Components/RoomListBanner';
import ExploreData from '../../common/Exploredata';
import SmallCard from '../Components/SmallCard';
import LiveData from '../../common/LiveData';
import MediumCard from '../Components/MediumCard';
import Footer from '../Components/Footer'
const RoomsList = () => {
  return (
    <div>
      <RoomListHeader />
      <RoomListBanner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <div className='text-4xl pb-5 font-semibold'>Explore Nearby</div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {ExploreData.map((item, index) => (
              <SmallCard img = {item.img} distance={item.distance} place={item.place} key={index}/>
              ))}
          </div>
        </section>
        <section className='pt-6'>
          <h2 className='text-4xl pb-5 font-semibold'>Live Anywhere</h2>
           <div className='flex overflow-scroll space-x-3 p-3 -ml-3'>
            {
              LiveData.map(
                (item,i)=>(
                  <MediumCard img = {item.img} title={item.title} key={i}/>
                )
              )
            }
           </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default RoomsList;
