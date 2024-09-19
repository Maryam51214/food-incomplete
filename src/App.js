
import './App.scss';
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// pages
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MealList from './components/Meal/MealList';
import CategoryList from './components/Category/CategoryList';
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/meal/:id" element = {<MealList />} />
        <Route path = "/meal/category/:name" element = {<CategoryList />} />
        <Route path  = "*" element = {<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;