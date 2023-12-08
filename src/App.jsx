
import { TextField,Button,Stack } from '@mui/material';
import './App.css'
import { useState } from 'react';


function App() {
    const [Interest,setInterest] = useState(0) ;
    const [Principle,setPrinciple] = useState(0); 
    const [Rate,setRate] = useState(0) ;
    const [Year,setYear] = useState(0) ;

    const [validPrinciple,setValidPrinciple]=useState(true)
    const [validRate,setValidRate]=useState(true)
    const [validYear,setValidYear]=useState(true)
    console.log(Principle);
    const reset = () => {
      setInterest(0)
      setPrinciple(0)
      setRate(0)
      setYear(0)
      setValidPrinciple(true)
      setValidRate(true)
      setValidYear(true)
    }
    
    const ValidateUserInput = (e)=>{
      const {name,value} = e.target
      console.log(`${name},${typeof value}`);
      console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
      if(!!value.match(/^[0-9]*.?[0-9]+$/)){
        if(name==='principle'){
          setPrinciple(value)
          setValidPrinciple(true)
        }else if(name==='rate'){
          setRate(value)
          setValidRate(true)
        }else{
          setYear(value)
          setValidYear(true)
        }
      }else{
        //invalid pattern
        if(name==='principle'){
          setPrinciple(value)
          setValidPrinciple(false)
        }else if(name==='rate'){
          setRate(value)
          setValidRate(false)
        }else{
          setYear(value)
          setValidYear(false)
        }
      }
    }
    const handleCalculate = (e) => {
      e.preventDefault()
      if(!Principle || !Rate || !Year){
        alert("please fill the form completely")
      }else{
        setInterest(Principle*Rate*Year/100);
      }
    }
   

  return (
    <div style={{ width: "100%", height: "100vh" }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h3 style={{height:'35px'}}>Simple Interest Calculator</h3>
        <p>Calculate your Simple Interest Easily</p>
        <div style={{ width: "100%", height: "150px" }} className='d-flex justify-content-center align-items-center bg-warning mt-5 text-light shadow rounded flex-column'>
          <h1 style={{height:'50px'}}> ₹ {Interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className="mt-5" onSubmit={handleCalculate}>
        <div className="mb-3">
        <TextField onChange={e=>ValidateUserInput(e)} value={Principle || ""} className='w-100' id="outlined-basic" label="₹ Principal Amount" variant="outlined" name='principle'  />
        </div>
        {!validPrinciple &&<div className="mb-3 text-danger">
          <>Invalid Principle Amount</>
        </div>}
        <div className="mb-3 ">
        <TextField className='w-100' id="outlined-basic" label="Rate of Interest (%)" variant="outlined" name='rate' value={Rate || ""} onChange={e=>ValidateUserInput(e)} />
        </div>
        {!validRate &&<div className="mb-3 text-danger">
          <>Invalid Rate</>
        </div>}
        <div className="mb-3 ">
        <TextField className='w-100' id="outlined-basic" label="Time Period" variant="outlined" name='year' value={Year || ""} onChange={e=>ValidateUserInput(e)} />
        </div>
        {!validYear &&<div className="mb-3 text-danger">
          <>Invalid Year</>
        </div>}
        
          <Stack direction={'row'} spacing={2}>
            <Button disabled={validPrinciple&&validRate&&validYear?false:true} type='submit' className=' btn btn-primary' style={{width:'50%',height:'70px'}} variant="contained">Calculate</Button>
            <Button onClick={reset}  className='bg-light' style={{width:'50%',height:'70px'}} variant="outlined">Reset</Button>
          </Stack>
        
        </form>
      </div>
      
    </div>
  )
}

export default App
