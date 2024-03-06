import React from 'react'
import Header from './Components/Header'
import Card from './Components/Card'
import Footer from './Components/Footer'
import Impact from './Components/Impact'

export default function App() {
  const i1  = <i class="fa fa-mobile text-5xl" aria-hidden="true"></i>
  return (
    <>
    <Header/>
    <div className='grid grid-cols-1 gap-5 mt-[50px] mb-[50px] md:grid-cols-2 lg:grid-cols-3    max-w-[1300px] m-auto'>

    <Card title={'Software Development' } text={'Tell us what you like and we ll show your top job opportunities'}  i = {i1}/>
    <Card title={'Software Development' } text={'Tell us what you like and we ll show your top job opportunities'}  i = {i1}/>
    <Card title={'Software Development' } text={'Tell us what you like and we ll show your top job opportunities'}  i = {i1}/>
    </div>
    <Impact/>
    <Footer/>
    </>
  )
}
