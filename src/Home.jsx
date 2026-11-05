import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Doctorcard from './Doctorcard'
import "./Home.css"
function Home() {
    const [doctors, setDoctors] = useState([])
    const [searchTerm,setSearchTerm]=useState("")
    useEffect(() => {
        fetchDoctors()
    }, [])
    async function fetchDoctors() {
        console.log(doctors)
        await axios.get("https://doc-back1.onrender.com/doctors")
            .then(res => { setDoctors(res.data); console.log(res.data) })
    }
    const filteredDoctors=doctors.filter((i)=>{
        return i.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return (
        <div>
            <div className='search'>
                <input 
                    type="text" 
                    placeholder='Enter a doctor name' 
                    onChange={(e)=>setSearchTerm(e.target.value)}/>
            </div>
            {
                filteredDoctors.length === 0 ? (
                    <>No Doctor matches....</>
                ) : (
                    <div className="card-container">
                        {
                            filteredDoctors.map((i) => (
                                <Doctorcard 
                                    
                                    key={i.id}
                                    name={i.name}
                                    age={i.age}
                                    gender={i.gender}
                                    salary={i.salary}
                                    specialization={i.specialization} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Home
