import logo from "./logo.svg";
import "./App.css";
import InterStudent from "./classes/Interstudent";

function App() {

  InterStudent.calculateFirstYearResult("Suresh.K", 70, 98, 55, 50, 45, 48);
  InterStudent.calculateSecondYearResult("Suresh.K", 82, 96, 50, 50, 42, 50,25,25);
  InterStudent.totalResult()

  InterStudent.calculateFirstYearResult("Naresh.G", 70,98,55,20,45,48);
  InterStudent.calculateSecondYearResult("Naresh.G", 71,92,50,19,42,40,20,25);
  InterStudent.totalResult()


  InterStudent.calculateFirstYearResult("Krishna.M",60,98,58,50,42,48 );
  InterStudent.calculateSecondYearResult("Krishna.M",75,98,60,65,48,48 ,20,22);
  InterStudent.totalResult()



  return <div className="App"></div>;
}

export default App;
