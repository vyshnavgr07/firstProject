import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import Table from "./components/Table"
import Boot from './components/Boot'
import 'bootstrap/dist/css/bootstrap.min.css';





const onj={
  title:"appointment",
  descr:"the patient is resheduled",
  isActive:false
};



function App() {
   
  
  return (
    <div className="App">
      <Header />
      <Body />
      <Table />
      <Boot />
     

    </div>
    
);}



  

export default App;
