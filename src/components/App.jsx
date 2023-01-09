import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MovieDetails = lazy(() => import("./MovieDetails"));
const Movies = lazy(() => import("pages/Movies"));
const Home = lazy(() => import("pages/Home"));
const Casts = lazy(() => import("./Casts"));
const Reviews = lazy(() => import("./Reviews"));
const SharedLayout = lazy(()=> import("./SharedLayout"))

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} >
              <Route path="casts" element={<Casts />} />
              <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
  );
};
