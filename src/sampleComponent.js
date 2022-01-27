import { useDispatch,useSelector } from "react-redux"
import { connect } from "react-redux";
import axios from "axios";
import React from "react";
import {ascending,descending,search} from "./action"
import {useEffect,useState} from "react"
import "./sample.css"

const api = "https://5f3edf2513a9640016a69257.mockapi.io/hotels"


function SampleComponent(props) {
    const ascendingg = useSelector(state => state.ascending)
    const descendingg = useSelector(state => state.descending)
    const searchg = useSelector(state => state.search)
    const dispatchAscending = useDispatch(ascending())
    const dispatchDescending = useDispatch(descending())
    const dispatchSearch = useDispatch(search())
    console.log(ascending(),descending(),search(),"hii")
    const [data, setData] = useState([]);
    const [value,setValue] = useState("")
    const [displayData,setDisplayData] = useState("")
     useEffect(()=> {
        axios(api).then((response) => {
            setData(response.data)
            console.log(response.data,"url")
        }).catch(()=>{
            setData({})
        })
    },[])
   const handleValue=(e) => {
       setValue(e)
        console.log(e)
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
            {console.log(data)}
            </div>
        </div>
    </div>
    )
}

export default SampleComponent