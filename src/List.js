import React from 'react';
import fizjoLogo from './images/uprawnienia/uprawnienia.pdf';

function List() {
    return (
        <>

      <div id='about-info'>
          <h2> Z czym możesz się do mnie zgłosić? </h2>
          <h3> Kiedy: </h3>
          <ul>
            <li> masz dolegliwości bólowe mięśni oraz stawów </li>
            <li> gdy uległeś/aś wypadkowi - po złamaniach, skręceniach, stłuczeniach </li>
            <li> po operacjach (również przed planowaną operacją!)</li>
            <li> chcesz sprawdzić swój brzuch po ciąży (rozejście mięśni prostych brzucha, blizna po CC)</li>
            <li> zaobserwujesz wadę postawy u siebie lub u dzieci</li>
          </ul>
          <div className='entitlements'>
            <button> <a href={fizjoLogo}  target="_blank"> Uprawnienia i certyfikaty </a> </button>
          </div>
          
      </div>
       
        </>
    )
}


export default List