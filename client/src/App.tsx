import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SaveCar from './components/SaveCar';
import Cars from './components/CarsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path='/cars' element={<Cars />} />
      <Route path='/savecar' element={<SaveCar />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
