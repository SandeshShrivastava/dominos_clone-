import logo from './logo.svg';
import './App.css';
import Navbar from './Compponent/Navbar';
import Aside from './Compponent/Aside';
import Mean from './Compponent/Mean';
import Footer from './Compponent/Footer';
import Form from './Compponent/Form';
import Pagelogo from './Compponent/Pagelogo';
function App() {
  
  return (
   <>
   <Navbar/>
   <Pagelogo/>
   <Aside/>
   <Mean/>
   <br />
   <hr className='line' />
   <Form/>
   
   <Footer/>
   
</>
  );
}

export default App;
