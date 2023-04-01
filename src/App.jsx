import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

//   const [readTime, setReadTime] = useState('');

//   const handleTime = (time) =>{
//     const previousTime = JSON.parse(localStorage.getItem("ReadTime"));
//     if(previousTime){
//       const sum = previousTime + time;
//       localStorage.setItem("ReadTime", sum)
//       setReadTime(sum);
//     }
//     else{
//       localStorage.setItem("ReadTime", time)
//       setReadTime(time);
//     };
// }

  return (
    <div className="App">
      <Header></Header>
      <Blog ></Blog>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
