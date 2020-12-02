import Layout from '../components/Layout'
import Board from '../components/board/Board'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <Layout>
      <Header></Header>
      <Board></Board>
    </Layout>
  )
}