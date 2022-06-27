import React, {useEffect} from 'react';
import img4 from './images/portfolio/7.jpg';
import  gsap  from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function Oferta() {
    /*
    gsap.registerPlugin(ScrollTrigger);
 

    useEffect(() => {   
    gsap.from('.photo-oferta', {scrollTrigger: {
      trigger: '.photo-oferta',
      toggleActions: 'restart pause restart pause'},
      y: 80,
      opacity: 0,
      duration: 1.5
    })
          
  }, [])
  */


  return (<>
  <div className='oferta-baner'>
      
  </div>
  <div className='photo-oferta'>
  Decydując się na sesję zdjęciową otrzymujecie gotowy produkt w postaci odbitek bądź albumu. Starannie przygotowane odbitki na matowym papierze możecie wręczyć najbliższym lub zostawić je u siebie. To Wy wybieracie zdjęcia, które chcecie wydrukować, a ja resztę robię za Was. Wam pozostaje podzielenie się swoim wspomnieniami z najbliższymi.
  </div>
  <div className='photo-img'>
      <img src={img4} />
  </div>
  <div className='photo-oferta'>
  A może jednak album? Proszę bardzo. Albumy w tradycyjnej oprawie są maja twarde, niewyginające się karty, a jedwabny papier jest odporny na zabrudzenia. Dodatkowym atutem jest możliwość stworzenia nawet 50 rozkładówek. Wybieracie fotografie które mają znaleźć się w foto książce – bądź zdajecie się na mnie i otrzymujecie gotowy produkt bez straty czasu na selekcję zdjęć. Posiadacie zdjęcia z telefonu? Również mogę je dołączyć i zamknąć w albumie.
  </div>
  <div className='photo-img'>
      <img src={img4} />
  </div>
  <div className='photo-oferta'>
  Z pewnością albumy przyciągną wzrok stojąc na półce. Będą cieszyć oko podczas oglądania, bez obaw, że szybko się zniszczą. Możecie wybierać z 40 różnych opraw w przepięknych kolorach.
  </div>
  <div className='photo-img'>
      <img src={img4} />
  </div>

  <div className='oferta-baner'>
      
 </div>
  </>);
}
