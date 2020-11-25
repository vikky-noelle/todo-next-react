import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Board from '../components/board/board'
import Header from '../components/header/header'

export default function Home() {
  return (
    <Layout>
      <Header></Header>
      <Board></Board>
    </Layout>
  )
}
