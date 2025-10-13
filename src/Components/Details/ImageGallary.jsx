import React, { useState } from 'react'
import { getImageUrl } from "../../utils"

function ImageGallary(arr) {
  const [currentImage, setCurrentImage] = useState(0);
  const { images } = arr

  return (
    <div className="p-5">
      <div className='md:flex gap-4 items-center'>
        <div className='flex md:flex-col gap-4 pb-5'>
          {images.map((img, index) => (
            <div
              key={index}
              className='md:flex justify-center items-center content-center overflow-hidden bg-white rounded-md aspect-square md:h-[100px] h-[50px]'>
              <img
                key={index}
                src={img.src ? img.src : getImageUrl(img.image)}
                onClick={() => setCurrentImage(index)}
                alt={img.imageAlt}
                className='object-cover h-fit w-fit cursor-pointer' />
            </div>
          ))}
        </div>
        {/* Main image */}
        <div className='md:flex'>
          <div className='flex justify-center items-center content-center overflow-hidden bg-white rounded-md aspect-square md:h-[480px] h-[100]'>
            <img
              key={images[currentImage].name}
              src={images[currentImage].src ? images[currentImage].src : getImageUrl(images[currentImage].image)}
              alt={images[currentImage].imageAlt}
              className='object-cover h-fit w-fit rounded-md' />
          </div>
          {/* Image text data */}
          <div className='text-white md:pl-10 pt-5'>
            <h1 className="font-bold text-lg">{images[currentImage].name}</h1>
            <p className=''>{images[currentImage].date}</p>
            <p className='italic'>{images[currentImage].description}</p>
            <p className=''>{images[currentImage].institution}</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ImageGallary