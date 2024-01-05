import React,{useState} from 'react';
//import SummerM from './Summer';
import Menu from'./MenuApi'
import Navbar from './Navbar';
import Menucard from './Menucard';
import './Style.css'
const Fruit = () => {

  const uniqueList = [...new Set(Menu.map((curElem)=>{
    return curElem.Category;
  })),
  "All"]

  const[menu,setmenu]=useState(Menu);
  const[menulist,setmenulist]=useState(uniqueList)
  //const[search,setSearch]=useState();

  const filteritem = (Category) =>{
    if(Category==="All"){
      setmenu(Menu)
      return;
    }
    const updatelist = [...new Set(Menu.filter((curElem)=>curElem.Category === Category))]
    setmenu(updatelist)
  }
  return (
    <>
    <Navbar menulist={menulist}  filteritem={filteritem}/>
    <Menucard menu={menu}/>
    </>
  )
  }
export default Fruit;