import React from 'react';
import Homepage from './components/homePage/HomePage';
import Navbar from './components/navbar/Navbar';
import { useSelector } from 'react-redux';
import { selectSignedIn } from './features/userSlice';
import Blogs from './components/blog/Blogs';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div>
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme='dark'
      />
    </div>
  );
}

export default App;
