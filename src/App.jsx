import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import FooterComp from "./components/footer/FooterComp";
import Home from "./pages/home/Home";
import CreateTodo from "./pages/createTodo/CreateTodo";
import ViewTodo from "./pages/viewTodo/ViewTodo";
import EditDelTodo from "./pages/edit&delTodo/EditDelTodo";
import UpdateTodo from "./pages/edit&delTodo/UpdateTodo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/createtodo' element={<CreateTodo />} />
        <Route path='/viewtodo' element={<ViewTodo />} />
        <Route path='/edit-deltodo' element={<EditDelTodo />} />
        <Route path='/updatetodo/:id' element={<UpdateTodo />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}

export default App;
