import {
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DownloadPage from "./pages/DownloadPage";
import UploadPage from "./pages/UploadPage";
import UsagePage from "./pages/UsagePage";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Outlet />} errorElement={<ErrorPage />}>
        <Route index path='/' element={<UploadPage />} />
        <Route path='/project' element={<DownloadPage />} />
        <Route path='/usage' element={<UsagePage />} />
      </Route>
    )
  );

  return (
    <div className='text-body'>
      <RouterProvider router={router} />
    </div>
  );
}
