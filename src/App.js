//import logo from './logo.svg';
import './App.css';
import {PricePlanData} from './PricePlanData.js';
import {PricePlan} from './PricePlan.js';
function App() {
  return (
    <div className="overall-grid">
    <div className="grid-class">
     {PricePlanData.map((plan,index)=> <PricePlan key={index} plan={plan} id={index}/>)}
     </div>
     </div>
  );
}

export default App;
