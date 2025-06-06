import '../DashContent/DashContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../css/Popup.css";
import React,{useState,useEffect} from "react";
import api from "../../resource/api"





export const UpdatePopup=(props)=>{

    const setTrigger=props.setTrigger
    const updateProp=props.updateProp
    const id=updateProp.id
    const employee_type= updateProp.employee_type
    // const first_name=updateProp.first_name
    // const middle_name=updateProp.middle_name
    // const last_name=updateProp.last_name
    const full_name=updateProp.full_name
    const _email =updateProp.email
    const _password="*******"
    const _phone=updateProp.phone
    const _salary=updateProp.salary
    const full_identification=updateProp.full_identification
    const _username=updateProp.username



    const [employeeType,setEmployeeType]=useState("")
    // const [firstName,setFirstName]=useState("");
    // const [middleName,setMiddleName]=useState("");
    // const [lastName,setLastName]=useState("");
    const [fullName,setFullName]=useState('')
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("")
    const [salary,setSalary]=useState("");
    const [errors,setErrors]=useState({})
    const [fullIdentification,setFullIdentification]=useState("")
    const [username,setUsername]=useState("")
    

    useEffect(()=>{
        setEmployeeType(employee_type)
        // setFirstName(first_name)
        // setMiddleName(middle_name)
        // setLastName(last_name)
        setFullName(full_name)
        setEmail(_email)
        setPassword(_password)
        setPhone(_phone)
        setSalary(_salary)
        setFullIdentification(full_identification)
        setUsername(_username)

    },[employee_type,full_name,_email,_phone,_salary,full_identification,_password,_username])
   
// console.log(updateProp.id)


const handleSubmit=async(e)=>{
     e.preventDefault()
     console.log(employee_type)
console.log(employeeType)
console.log(`${employeeType}===${updateProp.employee_type}`)
console.log(email+_email)
    console.log(employee_type+employeeType)
    if (employeeType===employee_type){

        console.log("im in here ")
        await api.put(`${employee_type}/update/${id}`,{fullName,email,password,phone,salary,fullIdentification} )
        .then((res)=>{
            alert("sucessfully updated")
            setTrigger(false)
            console.log("we're in put router ")
            window.location.reload()
        })
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })
        
        }
        else{
            console.log(employeeType)
         await api.post(`${employeeType}/create`,{fullName,email,password,phone,salary,username} )
    .then((res)=>{

        alert(res.data)
       
        console.log("we're in post hshahaa")
        console.log(`the ${employee_type} id is ${id}`)
    })
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
    
        await api.delete(`${updateProp.employee_type}/delete/${id}`)
        .then((res)=>{
            
            setTrigger(false)
            window.location.reload()
        })
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        
        })
    }
        
}
   return(props.trigger)?(

   
           <div className="dashContent">
              <div className="overview">
                 <div className="title">
                   <i className="uil uil-graduation-cap"></i>
                    <span className="text">Employee/Add Employee</span>
                 </div>
            <div className="container">
                    <div className="content">
                    <div className="popup">
                    <div className="popup-inner">
                       <form onSubmit={handleSubmit}>
                            <div className="user-details">
                                 <div className="input-box">
                                     <span className="details">Employee Type {employeeType}</span>
                                      <select id='employeeType' name='employeeType' required defaultValue={updateProp.employee_type} onChange={(e) => { setEmployeeType(e.target.value) }} autoComplete="on">
                                        <option value=''>select type</option>
                                        <option value='admin'>Admin</option>
                                        <option value='manager'>Manager</option>
                                        <option value='accountant'>Accountant</option>
                                        <option value='instructor'>Instructor</option>
                                      </select>
                                 </div>


                                  <div className="input-box">
                                      <span className="details">Full Name:</span>
                                      <input type='text' id='fullName' required defaultValue={fullName} onChange={(e) => { setFullName(e.target.value) }} name='fullName' placeholder='Full Name of employee' autoComplete='on' /><br />
                                  </div>


                                  {/* <div className="input-box">
                                      <span className="details">Middle Name:</span>
                                      <input type='text' id='middleName' required defaultValue={middleName} onChange={(e) => { setMiddleName(e.target.value) }} name='middleName' placeholder='Middle Name of employee' autoComplete='on' /><br />
                                  </div>

                                   <div className="input-box">
                                       <span className="details">Last Name:</span>
                                       <input type='text' id='lastName' required defaultValue={lastName} onChange={(e) => { setLastName(e.target.value) }} name='lastName' placeholder='Last Name of employee' autoComplete='on' /><br />
                                  </div> */}

                                     <div className="input-box">
                                          <span className="details">Email:</span>
                                          <input type='email' id='email' required defaultValue={email} onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder='Email' autoComplete='on' /><br />
                                     </div>

                                     <div className="input-box">
                                <span className="details">Password:</span>
                                <input type='password' id='password' required defaultValue={_password} onChange={(e)=>{setPassword(e.target.value )}} name='password' placeholder="Enter employees's password" autoComplete='on'/>
                                {/* <div className="errors">{errors.password}</div> */}
                                       </div>


                                       <div className="input-box">
                                            <span className="details">Phone:</span>
                                            <input type='tel' id='phone' required defaultValue={_phone} onChange={(e) => { setPhone(e.target.value) }} name='phone' placeholder='Phone Number' autoComplete='on' /><br />
                                       </div>


                                       <div className="input-box">
                                           <span className="details">Salary:</span>
                                           <input type='number' id='salary' required defaultValue={_salary} onChange={(e) => { setSalary(e.target.value) }} name='salary' placeholder='Enter Salary' autoComplete='on' /><br />
                                       </div>

                                
                                                 <button type='submit' className="btn btn-info btn-block" name='submit' onChange={handleSubmit} >Submit</button>
                                                 <button className="btn btn-info btn-block" onClick={ ()=>{setTrigger(false)}}> close </button>  
                                                 </div>
    </form>
                   
        {props.children}
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>


  
    
):"";
};