
import '../styles/global.css';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Layout>
      <Home />
      <SignUp />
      <Login />
      <Quiz />
      <Result />
    </Layout>

  );
}

export default App;
