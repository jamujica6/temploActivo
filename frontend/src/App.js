
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText'
import Belén from './images/BelenMichiArbol.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      
      
        <div className="backgroundHome" style={{backgroundImage:`url(${Belén})`}}>
         
        </div>

 <div className="formControl"> 
    
  <FormControl >
  <InputLabel htmlFor="nombre">Nombre</InputLabel>
  <Input id="nombre" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Nombre y apellido.</FormHelperText>
  </FormControl>

  <FormControl >

  <InputLabel htmlFor="correo">Correo</InputLabel>
  <Input id="correo" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Deja el correo que más uses 🍉.</FormHelperText>
</FormControl>
</div>  
      
    </div>
  );
}

export default App;
