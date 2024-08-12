import Button from './components/button/button';
import './App.css';
import ColorUppercase from './components/text/colorUppercase';


function App() {
  return (
    <>
      <div className='app-container'>

      <ColorUppercase text={'coffe and codes'} />
      <Button label='Baixar CV' />
      </div>



    </>
  )
}


export default App;
