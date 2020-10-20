import React from "react";

const Display = (props) => {
  const {dogs} = props

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {dogs.map((dog) => (
        <article>
          <img src={dog.img} />
          <h1>{dog.name}</h1>
          <h3>{dog.age}</h3>
          <button onClick={() => {
            props.selectDog(dog)        
            props.history.push("/edit")
          }}>
            Edit
          </button>

           <button onClick={() => {
            props.deleteDog(dog)        
          }}>
            Delete
          </button>

        </article>
      ))}
      </div>
  )

  return dogs.length > 0 ? loaded() : <h1>Loading...</h1>

};

export default Display;



// when button is clicked, the dog is passed into selectDog function - changes the state in App. 
// when button is clicked, the dog is passed into deleteDog function - deleted via fetch call 