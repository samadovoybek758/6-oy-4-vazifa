import React,{useState} from "react";
import '../form/index.css'
import Card from "../card";

function inputs() {
  const[username,setUsername] = useState('');
  const[email,setEmail] = useState('');
  const[age,setAge] = useState('');
  const[desc,setDesc] = useState('');

  let[users,setUsers] = useState([])

  function changeusername(event) {
    event.preventDefault()
    setUsername(event.target.value)
    
  }

  function changeemail(event) {
    event.preventDefault()
    setEmail(event.target.value)
    
  }

  function changeage(event) {
    event.preventDefault()
    setAge(event.target.value)
    
  }

  function changedesc(event) {
    event.preventDefault()
    setDesc(event.target.value)
    
  }

  function click_btn(event) {
    event.preventDefault()
    
    const user = {
      username: username,
      email: email,
      age: age,
      desc: desc,
      id: Date.now()
    }
    
    localStorage.setItem("users", JSON.stringify(users))

    let copied = [...users];
    copied.push(user)
    setUsers(copied)

    setAge('')
    setDesc('')
    setUsername('')
    setEmail('')


  }

  function delet_btn(params,id) {
    params.preventDefault()
    console.log(id);

    setUsers(users.filter(function (user) {
        return user.id != id
    }))
  }

  return (
    <>
      <div className="form">
        <input type="text" value={username} onChange={changeusername} placeholder="ENTER NAME..." />
        <input type="email" value={email} onChange={changeemail} placeholder="ENTER EMAIL..."/>
        <input type="number" value={age} onChange={changeage} placeholder="ENTER AGE..."/>
        <textarea value={desc} onChange={changedesc} placeholder="ENTER DESCRIPTION..."></textarea>

        <button onClick={click_btn}>SUBMIT</button>
       
    </div>
    <div className="cards">
        {
          users.length > 0 && users.map(function (value,index) {
                return <Card title={value} key={index} delet={delet_btn} />
          })
        }
    </div>
    </>
  )
}

export default inputs