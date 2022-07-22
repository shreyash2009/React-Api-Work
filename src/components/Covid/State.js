import React, {useState ,useEffect } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const State = () => { 
    const [values, setValue] = useState([]);            //we are initializing it with empty array here we can write data.statewise to but for that we need to get data first
    const getCovidData = async ()=>{                    // we are using async function here which will return a promise
        const res = await fetch("https://data.covid19india.org/data.json");    //if promise is resolved we 
        const data = await res.json();                                      //data converted into pure json
        setValue(data.statewise);               //updating the value of usestate with the data which we are getting from async function
    }

    useEffect(()=>{
        getCovidData()                                  ////As we want our app to get data as soon as page gets rendered
    },[]);    
    
    
    
  return (
    <>
    <h1 className='mt-5 text-center '>India Covid-19 Statewise data</h1>
    <div className='table-responsive'>
        <table className='table table-hover'>
            <thead className='thead-dark'>
                <tr>
                    <th>State</th>
                    <th>confirmed</th>
                    <th>Recovered</th>
                    <th>Death</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>

                {
                    values.map((currEle, ind)=>{
                        return(
                        <tr key={ind}>
                <td>{currEle.state}</td>
                <td className='text-danger'>{currEle.confirmed}</td>
                <td className='text-success'>{currEle.recovered}</td>
                <td className='text-danger'>{currEle.deaths}</td>
                <td className='text-success' >{currEle.active}</td>
                </tr>
                    )})
                }
                
            </tbody>
        </table>
    </div>
    </>
  )
}

export default State