import { AboutUs } from '../components/Section/AboutUS/AboutUsSec';
import Provides from '../components/Section/Provides/ProvidesSec';
import Layout from '../components/global/Layout/Layout';
import './App.scss';

function App() {
  return (
    <Layout>
      <main>
        <AboutUs />
        <Provides />
      </main>
    </Layout>
  );
}

export default App;
