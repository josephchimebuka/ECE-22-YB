import React, { useState } from 'react'
import styles from '../styles/Multicarousel.module.css'
import Image from 'next/image'
interface  MulticarouselProps{
    imageGroups: string[][];
}
const Multicarousel: React.FC<MulticarouselProps>= ({imageGroups}) => {
    const [currentState, setCurrentstate] = useState(0)

    const prevState=()=>{
        setCurrentstate((prev)=> Math.max(prev-1,0));
    }
    const nextState=()=>{
        setCurrentstate((next)=> Math.min(next+1,imageGroups.length - 1))
    }
  return (
    <div className={styles.carousel}>
        <div className={styles.caseNavigation}>
        <button className={styles.prevBtn} onClick={prevState} disabled={currentState === 0}>Previous</button>
        <button className={styles.nextBtn} onClick={nextState} disabled={currentState === imageGroups.length-1}>Next</button>
        </div>
   
    <div className={styles.carouselInner} style={{ transform: `translateX(-${currentState * 20}%)` }}>
      {imageGroups.map((imageGroup, groupIndex) => (
        <div key={groupIndex} className={styles.imageGroup}>
          {imageGroup.map((image, index) => (
            <Image className='carouselImage' key={index} src={image} alt='image definition' width={300} height={300}/>
          ))}
        </div>
      ))}
    </div>
   
  </div>
  )
}

export default Multicarousel