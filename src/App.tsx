import React from 'react';
import Homepage from './components/homePage/HomePage';
import Navbar from './components/navbar/Navbar';
import { useSelector } from 'react-redux';
import { selectSignedIn } from './features/userSlice';
import Blogs from './components/blog/Blogs';

function App() {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div>
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
}

export default App;
