import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  MainLayout,
  Home,
  Semesters,
  Semester,
  Subject,
  Favorites,
} from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="semesters" element={<Semesters />} />
          <Route path="semester/:semesterId" element={<Semester />} />

          <Route
            path="semester/:semesterId/subject/:subjectId"
            element={<Subject />}
          />

          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
