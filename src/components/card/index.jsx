import '../card/index.css'

function Card(props) {
    const{username,email,age,desc} =props.title
    const{delet} = props
    
  return (
    <div className='card'>
        <h1>User:{username}</h1>
        <h1>Email:{email}</h1>
        <h1>Age:{age}</h1>
        <h1>Description:{desc}</h1>
        <button onClick={delet}>DELET</button>
    </div>
  )
}

export default Card