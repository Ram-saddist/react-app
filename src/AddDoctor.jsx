import React,{useState} from 'react'

function AddDoctor() {
    const [name,setName]=useState("")
    const [salary,setSalary]=useState("")
    const [specialization,setSpecialization]=useState("")
    const [gender,setGender]=useState("")
    const [age,setAge]=useState("")
    function handleSubmit(){
        console.log(name,age,gender,salary,specialization)
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder='Enter name'
                onChange={(e)=>setName(e.target.value)}/> <br />
            <input 
                type="text" 
                placeholder='Enter age'
                onChange={(e)=>setAge(e.target.value)}/> <br />
            <input 
                type="text" 
                placeholder='Enter salary'
                onChange={(e)=>setSalary(e.target.value)}/> <br />
            <input 
                type="text" 
                placeholder='Enter gender'
                onChange={(e)=>setGender(e.target.value)}/> <br />
            <input 
                type="text" 
                placeholder='Enter specialization'
                onChange={(e)=>setSpecialization(e.target.value)}/> <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddDoctor
