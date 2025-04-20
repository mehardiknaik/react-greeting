import { RouterProvider } from 'react-router';
import router from './pages/routes';
import FormContext from './context/FormContext';

const App = () => {
  return (
    <FormContext>
      <RouterProvider router={router} />
    </FormContext>
  );
};

export default App;
