import BebidaForm from '../PratoFormulario/BebidaForm'
import { NavLink } from 'react-router-dom'
import { BiDrink } from 'react-icons/bi'

function CriarBebida(){
return(
    <div>
        <div className='text-center'>
            <NavLink to='/criar-pratos'><button className='botao-amarelo mb-3 mt-4 p-1'>Criar pratos</button></NavLink>
            <h1 className="mb-3 titulo-verde">Criar uma nova bebida <BiDrink size={40}/></h1>
        </div>
        <BebidaForm/>
    </div>
)
}
export default CriarBebida