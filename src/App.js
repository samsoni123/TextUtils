
import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';

function App() {
  return (
    <>
   <Navbar title="TextUtils" aboutText="About TextUtils"/>
   <div className='container my-3'>
   <TextForm heading="Enter the text to analyze below" />
   </div>
    </>
  );
}

export default App;
