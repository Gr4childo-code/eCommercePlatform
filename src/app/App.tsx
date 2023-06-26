import { AboutUs } from '../components/Section/AboutUSSec/AboutUsSec';
import Provides from '../components/Section/ProvidesSec/ProvidesSec';
import { WhaWeDoSec } from '../components/Section/WhaWeDoSec/WhaWeDoSec';
import Layout from '../components/global/Layout/Layout';
import './App.scss';

function App() {
  return (
    <Layout>
      <main>
        <AboutUs />
        <Provides />
        <WhaWeDoSec />
      </main>
    </Layout>
  );
}

export default App;
