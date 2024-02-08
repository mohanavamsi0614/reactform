import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setdata] = useState({fname:"",lname:"",email:"",number:"",submit:false})
  const [error,seterror]=useState({})
  function changer(e){
     const {name,value}=e.target
     let da={...data}
     da[name]=value
    setdata(da)
    console.log(data)
  }
  function val(){
    const mail=new RegExp('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
    const number=new RegExp('/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/')
    let d={}
    if(!data.fname){
      d.fname="enter the first name"
    }
    if(!data.lname){
      d.lname="enter the last name"
    }
    if (!data.email){
      d.email="enter the email"
    }
    if (!mail.test(data.email)){
      d.email="enter mail in correct formate"
    }
    if (!data.number){
      d.number="enter the number"
    }
    seterror(d)
  }
  function sub(){
  setdata({...data,submit:true})
  val()
  }


  return (
    <>
    <div className='form'>
      <form>
      {Object.keys(error).length==0 && data.submit ?(<div className='light'><h2>{data.fname} Submited!</h2></div>) :Object.keys(error).length!=0?(<h2>Something is fishy</h2>):("") }
        <label htmlFor='fname'>First Name</label>
        <input
          name='fname'
          type='text'
          placeholder='First name'
          value={data.fname}
          onChange={(e)=>changer(e)}
        />
        {error.fname && data.submit ?(<p>{error.fname}</p>) : ""}
        <label htmlFor='lname'>Last Name</label>
        <input
          name='lname'
          type='text'
          placeholder='Last name'
          value={data.lname}
          onChange={(e)=>changer(e)}
        />
        {error.lname && data.submit ?(<p>{error.lname}</p>) : ""}

        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type="email"
          placeholder='Email'
          value={data.email}
          onChange={(e)=>{changer(e)}}
        />
        {error.email && data.submit ?(<p>{error.email}</p>) : ""}
        <label htmlFor='number'>Phone Number</label>
        <input
          name='number'
          type="number"
          placeholder='Number'
          value={data.number}
          onChange={(e)=>{changer(e)}}
        />
        {error.number && data.submit ?(<p>{error.number}</p>) : ""}
      </form>
      <button className='green' onClick={sub}>Submit</button>
      </div>
    </>
  )
}

export default App
