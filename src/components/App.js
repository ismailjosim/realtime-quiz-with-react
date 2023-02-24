
import '../styles/global.css';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Layout>
      <Home />
      <SignUp />
    </Layout>

  );
}

export default App;
