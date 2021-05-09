import React, { useState} from 'react';
import "./App.css";
import Chart from "./chart";
import Context from "./Context";
import axios from "axios";
import store from "./store/store"
import { Provider } from "react-redux";
import {BrowserRouter ,Route} from "react-router-dom";
import Form from "./Form"
import Logo from "./logo.png"


 function App(){
	 let name=useState();
	 let value=useState()
	 let [clientname,setclientname]=useState("");
	 let [clientorder,setclientorder]=useState();

function onchangeData(evt){
if(evt.target.id=="name"){
	setclientname(evt.target.value)
}else if(evt.target.id=="value"){
	setclientorder(evt.target.value);

}

}

async function Addclient(){
	let data={
		clientname,
		clientorder
	}
let res=	await axios.post("/client",data);
console.log(res);

}

 let data={
	 name,
	 value,
 }


	 return (
		<Provider store={store}>
	 <div>
	 <BrowserRouter>
	 <Route exact path="/">
	<div style={{width:"93%",marginLeft:"60px",height:"70px",display:"flex",justifyContent:"space-between",alignItems:"center"}} >
	<img src={Logo} />
	<h3>Target 100,000</h3>
	</div>
	 <Chart />
	 </Route>
	 <Route exact path="/Pmz70ro1">
	 <Chart />
	 <Form />
	 </Route>

	</BrowserRouter>
	 </div>
	 </Provider>
	 );
}
export default App;