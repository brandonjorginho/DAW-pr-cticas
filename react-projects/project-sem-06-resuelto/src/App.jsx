import UseStateSection from './components/sections/UseStateSection'
import Formulario from './components/sections/Formulario'
import Api from './components/sections/Api'
function App() {
  return (
    <div className='bg-gray-950 px-10 pt-5 pb-5'>
      <picture className='flex justify-center'>
        <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdlsO0LP022AtLRcPlik-5uWGqVS90oIr1Wy70ULe7-qyaW-Y3a9zUgndw6Q6KuHX2gH_Vd3Nxnl6EOU38_ep9ApNbNfn2Krr6hLj6fhs_eZ.png?r=976" alt="Logo" className='w-1/4' />
      </picture>
      <h3 className='text-gray-300 text-2xl font-title'>RICK AND MORTY PROJECT</h3>
      <p className='text-gray-400'>Este proyecto tiene la finalidad de comprender algunos conceptos de React para el desarrollo de Aplicaciones Web.</p>
      {/* Inciaremos con el uso de UseState y Evento Click */}
      <UseStateSection />
      {/* Continuamos con los Formularios */}
      <Formulario />
      {/* Consumo de la Api de Rick and Morty, Renderizado Iterativo */}
      <Api />
    </div>
  )
}

export default App
