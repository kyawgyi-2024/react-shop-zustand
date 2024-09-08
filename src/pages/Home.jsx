import React from 'react'
import Container from "../components/Container";
import CategoriesBtnGroup from "../components/CategoriesBtnGroup"
import CategorySection from '../components/CategorySection';

const Home = () => {
  return (
    <Container className='bg-red'>
    <h2 className=" font-bold mb-4 text-md text-slate-500 mt-3">Product Categories : </h2>
    <CategoriesBtnGroup />
    <CategorySection />
  </Container>
  )
}

export default Home