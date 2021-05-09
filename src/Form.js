import React, { useState} from 'react';
import "./App.css";
import store from "./store/store"
import { Provider } from "react-redux";
import { connect } from "react-redux";
import {Addclient,DeleteClient,UpdateClient } from "./store/actions/listaction";

function Form(props){
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
            if(clientname=="" || clientorder== null){
         alert("please fill the fields")
            }else{

           
            let data={
                clientname,
                clientorder
            }
           props.Addclient(data);

        }

        }

        async function DeleteClient(){
            if(clientname=="" || clientorder== null){
                alert("please fill the fields")
                   }else{
       
                  
            let data={
                clientname,
                clientorder
            }
           props.DeleteClient(data);
        }


        }
        async function updateClient(){
            if(clientname=="" || clientorder== null){
                alert("please fill the fields")
                   }else{
       
                  
            let data={
                clientname,
                clientorder
            }
           props.UpdateClient(data);


        }
        }
        function Inputs(){
            return(        <fieldset>
                <legend>Admin Section</legend>
                Label:
                <br />
                <input onChange={onchangeData} placeholder="label" id="name" />
                <br />
                Value:
                <br />
                <input onChange={onchangeData}  placeholder="value" id="value" />
                <br />
                <br />
           <div>
               <span> <button onClick={Addclient} >Submit</button></span>
               <span>  <button onClick={DeleteClient} >Delete</button></span>
               <span> <button onClick={updateClient} >Update</button></span>
           </div>
              </fieldset>)
        }
    return(
        <div style={{marginTop:"10px"}}>
		{Inputs()}
	 </div>
    );
}export default connect((store) => {
	return store
  },{Addclient,DeleteClient,UpdateClient})(Form)