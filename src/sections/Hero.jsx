import React, {useState} from 'react';
import { arrowRight } from '../assets/icons';
import Button from '../components/Button';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from "../components/ShoeCard";

const Hero = () => {

  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section id="home" className="w-full border-2 border-red-500 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red text-xl font-montserrat">Our Summer Collection</p>
        <h1 className="font-palanquin mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold"><span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br /><span className="text-coral-red inline-block mt-3">Nike</span> Shoes</h1>
        <p className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover the quality of our tested products in your active life.</p>
        <Button label="Show now" iconURL={arrowRight}/>  
        
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          { statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">{stat.label}</p>
            </div>
          )) }
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
          src={bigShoeImage} 
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          { shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => {setBigShoeImage(shoe)}} bigShoeImage={bigShoeImage} />
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}

export default Hero;