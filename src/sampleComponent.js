import { useDispatch,useSelector } from "react-redux"
import { connect } from "react-redux";
import axios from "axios";
import React from "react";
import {useEffect,useState} from "react"
import "./sample.css"
import {taskAction} from "./action/taskAction"

function SampleComponent(props) {
    //here its rendering 4 times
    const [data, setData] = useState([]);
    const [value,setValue] = useState("")
    const [displayData,setDisplayData] = useState("")
    console.log(props.data,"Api-Data")
    useEffect(()=> {
        //here its rendering 1 times
        setData(props.data)
         props.taskAction()
        console.log(props.data,"propsdata")
    },[props.data])
   const handleValue=(e) => {
       setValue(e)
        if(value !== " ") {
            let filterData = data.filter(x=>{
                   return Object.values(x).join('').toLowerCase().includes(value.toLowerCase())
               })
               setDisplayData(filterData)
        } else {
            setDisplayData(data)
        }
    }
    const handleAscending = e => {
        
        let sortAscending = data.sort((a,b) => {
            if(a.name < b.name) {return -1}
            if(a.name > b.name) {return 1}
            return 0
        })
        
        setDisplayData(sortAscending)
    }

    const handleDescending = e => {
        let sortDescending = data.sort((a,b) => {
            if(a.name > b.name) {return -1}
            if(a.name < b.name) {return 1}
            return 0
        })
        setDisplayData(sortDescending)
        setDisplayData("")
    }
    return(
    <div>        
        
        <div>
            <div className="HTMLPart">
            <input className="inputSearchBar" onChange={ (e)=>handleValue(e.target.value)} value={value}></input>
            <button onClick={handleAscending}>Ascending</button>
            <button onClick={handleDescending}>Descending</button>
            </div>
            <div className="displayData">
            {   value.length > 1 ? (    
            displayData.map((x,y) => {
              return  <div key ={y} className="displayInsideData">
                   <p> {x.name}</p>
                   <img className="imageSize" src={x.image}></img>
                </div>
            })):(
                data.map((x,y) => {
                    return <div className="displayInsideData" key={y}> 
                       <p> {x.name} </p>
                       <img className="imageSize" src={x.image}></img> 
                    </div>
                })
            )}
            </div>
        </div>
    </div>
    )
}
const mapStateToProps = state => ({
    data: state.apiData.data,
    loading: state.apiData.loading,
    error: state.apiData.error,
 });
 
 const mapDispatchToProps = {
    taskAction
 };
export default connect(mapStateToProps,mapDispatchToProps)(SampleComponent)