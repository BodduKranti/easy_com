
import { Outlet } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer, Header } from './component';
import 'react-quill/dist/quill.snow.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
function App() {
    return (
        <>
            <ToastContainer />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
