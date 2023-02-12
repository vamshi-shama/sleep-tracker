import SleepDataTable from './SleepDataTable';
import Header from './Header';
import SleepData from './SleepData';
import Footer from './Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SleepData />
      <Footer />
      <SleepDataTable />
    </div>
  );
}

export default App;
