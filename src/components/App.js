
import { RouterProvider } from 'react-router-dom';
import '../styles/global.css';
import routes from './routes/routes';




function App() {
  return (
    <RouterProvider router={ routes }>

    </RouterProvider>
  );
}

export default App;
