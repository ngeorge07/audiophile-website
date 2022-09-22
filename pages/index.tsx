import type { NextPage } from 'next';
import Footer from '../components/navigation/footer/Footer';
import Header from '../components/navigation/header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="h-screen">
        <p>hello</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
