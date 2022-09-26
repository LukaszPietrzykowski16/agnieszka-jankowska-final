import Fizjo from './Fizjo';
import List from './List';
import ContactFizjo from './ContactFizjo';
import Footer from './FooterElementFizjo.js';
import FizjoMenu from './FizjoMenu';
import Carousel from './Carousel';
import Cert from './Cert';

function HomeFiz() {
  return (
    <>
   <FizjoMenu />
   <Fizjo />
   <List />
   <Carousel />
   <Cert />
   <ContactFizjo />
   <Footer />
    </>
   );
}

export default HomeFiz;
