import React from 'react'

const Index = () => {
  return(
    <div className='text-center mx-auto px-2 font-bold'>
      <h1 className='py-12 px-2'>Mantenha-se protegido.<br></br>Proteja sua comunidade.</h1>
      <h1 className='py-12 px-2'>Compartilhe como você está se sentindo.</h1>
      <h1 className='py-12 px-2'>Veja como as pessoas ao seu redor estão se sentindo.</h1>
      <a href="/api/login" className='py-4 px-2 rounded font-bold bg-pink-800 text-white block w-1/4 shadow-xl hover:shadow mx-auto'>Comece por aqui</a>
    </div>
  )
}

export default Index