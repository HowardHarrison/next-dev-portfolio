"use client"
import { Carousel  } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOpenInNew } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

export default function Slideshow() {
    const certificates = [
        // {
        //     id: 1,
        //     title: 'JavaScript',
        //     image: 'Certificate/photo_1.jpeg',
        //     link: 'https://www.sololearn.com/certificates/CT-GNSDYLMM'
        // },
        {
            id: 2,
            title: 'JavaScript Intermediate',
            image: '/Certificate/photo_2.jpeg',
            link: 'https://www.sololearn.com/certificates/CC-J9Y5ZE2L'
        },
        {
            id: 3,
            title: 'Game Development with JS',
            image: '/Certificate/photo_3.jpeg',
            link: 'https://www.sololearn.com/certificates/CT-1RNKIBDN'
        },
        {
            id: 4,
            title: 'React + Redux',
            image: '/Certificate/photo_4.jpeg',
            link: 'https://www.sololearn.com/certificates/CT-OTAXDOTB'
        },
    ]

  const renderCustomArrowPrev = (
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>,
    //hasPrev: boolean
  ) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute left-4 top-[50%] z-10 h-10 w-10 -translate-y-1/2 transform rounded-full bg-slate-200 p-1 pr-1 text-2xl text-black opacity-75"
        aria-label="Previous Slide"
      >
        {/* Custom Left Arrow Icon */}
        &#x276E; {/* Unicode for '<' */}
      </button>
    );
  };

  const renderCustomArrowNext = (
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>,
    //hasNext: boolean
  ) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute right-4 top-[50%] z-10 h-10 w-10 -translate-y-1/2 transform rounded-full bg-slate-200 p-1 pr-1 text-2xl text-black opacity-75"
        aria-label="Next Slide"
      >
        {/* Custom Right Arrow Icon */}
        &#x276F; {/* Unicode for '>' */}
      </button>
    );
  };

    return (
        <Carousel
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          autoFocus={false}
          interval={4000}
          dynamicHeight={false}
          swipeScrollTolerance={5}
          transitionTime={1000}
          renderArrowPrev={renderCustomArrowPrev}
          renderArrowNext={renderCustomArrowNext}
          useKeyboardArrows={false}
          swipeable={false}
        >
{certificates.map(item => (
    <div key={item.id}>
      <Image src={item.image} alt="Description of the image" width={500} height={300}/>
      <div className='w-full flex justify-center mx-auto bg-slate-200'>
        <div className='bg-yellow-50 p-1 my-2 ml-2 rounded-bl rounded-tl overflow-auto whitespace-nowrap'>{item.link}</div>
        <div className='bg-slate-300 p-1 my-2 mr-2 rounded-br rounded-tr'>
        <Link href={item.link} target='_blank' className='text-white'>
          <MdOpenInNew className='w-6 h-6'/>
        </Link>  
        </div>
      </div> 
    </div>
))}
        </Carousel>
    )
}
//w-[600px] h-[400px]