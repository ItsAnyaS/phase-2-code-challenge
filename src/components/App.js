import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [planateers, setPlanateers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchByAge, setIsSearchByAge] = useState(false)
  const [refresh, setRefresh] = useState(false)
useEffect(()=> {
const getData = async () => {
  let req = await fetch("http://localhost:8003/planeteers");
  let res = await req.json()
  setPlanateers(res)
}
getData()
}, [refresh])


  return (
    <div>
      <Header />
      <SearchBar
        setSearchTerm={setSearchTerm}
        setIsSearchByAge={setIsSearchByAge}
      />
      <RandomButton setRefresh={setRefresh}/>
      <PlaneteersContainer planateers={planateers} searchTerm={searchTerm} isSearchByAge={isSearchByAge} />
    </div>
  );
}

export default App;
