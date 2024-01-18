import {
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import UsagePage from "./pages/UsagePage";
import ErrorPage from "./pages/ErrorPage";
import ProjectPage from "./pages/ProjectPage";
import { Toaster } from "react-hot-toast";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Outlet />} errorElement={<ErrorPage />}>
        <Route index path='/' element={<UploadPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/usage' element={<UsagePage />} />
      </Route>
    )
  );

  return (
    <div className='font-body text-stone-900'>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}
