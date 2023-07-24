import { AboutUs } from '@/components/Section/AboutUSSec/AboutUsSec';
import { ContactWithUsSec } from '@/components/Section/ContactWithUsSec/ContactWithUsSec';
import CreativeProcessSec from '@/components/Section/CreativeProcessSec/CreativeProcessSec';
import { createContext, useState } from 'react';
import { ProductSec } from '@/components/Section/ProductSec/ProductSec';
import { Provides } from '@/components/Section/ProvidesSec/ProvidesSec';
import { WhaWeDoSec } from '@/components/Section/WhaWeDoSec/WhaWeDoSec';
import { Layout } from '@/components/global/Layout/Layout';
import './App.scss';
type ContextType = {
  initialView: string | null;
  setInitialView: React.Dispatch<React.SetStateAction<string | null>>;
};
const iContextState = {
  initialView: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setInitialView: () => {}
};

export const AppContext = createContext<ContextType>(iContextState);

function App() {
  const [initialView, setInitialView] = useState<null | string>(null);

  return (
    <AppContext.Provider value={{ initialView, setInitialView }}>
      <Layout>
        <main>
          <AboutUs />

          <Provides />
          <WhaWeDoSec />
          <ProductSec />
          <CreativeProcessSec />
          <ContactWithUsSec />
        </main>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
