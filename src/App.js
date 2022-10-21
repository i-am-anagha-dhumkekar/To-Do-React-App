import Header from "./components/Header";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import Display from "./components/Display";

function App() {
 
  const [list, setlist]=useState( ()=>
    {const saved = localStorage.getItem("list");
    const initialValue = JSON.parse(saved);
    return initialValue || [];});
  const addtolist=(obj)=>{
    setlist((prev)=>{
      return[
        ...prev,
          obj
      ];
    });
  }
  const deletetodo=(id)=>{
    setlist((prev)=>{
      return prev.filter((element,index)=>index!==id);
    });
  }
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list)); }, [list]
  );

  return (
    <div>
      <Header />
      <Input addtolist={addtolist} />
      {
        list.map((element,index)=>
        {
          return(
            <Display key={index}
            id={index}
            content={element.content}
            onDelete={deletetodo} />
          )
        })
      }
    </div>
  );
}

export default App;
