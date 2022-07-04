import React,{useState} from 'react'
import people from '../data';
import {ImQuotesRight} from "react-icons/im";
import {FcPrevious,FcNext} from "react-icons/fc";

const Review = () => { 
  const [index,setIndex] = useState(0);
  const {id,image,name,job,text} = people[index];
  const randomPerson = () =>{
    setIndex(()=>{
      let newIndex =  Math.trunc(Math.random()*people.length);
      return newIndex
    })
  }
  const nextPerson = ()=>{
    setIndex((index)=>{
      if(index === people.length-1){
        let newIndex = 0;
        return newIndex;
      }else{
        let newIndex = index+1;
        return newIndex
      }
    })
  }
  const prevPerson = ()=>{
    setIndex((index)=>{
      if(index === 0){
        let newIndex = people.length-1;
        return newIndex;
      }else{
        let newIndex = index-1;
        return newIndex
      }
    })
  }
  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className = 'person-img' />
        <span className='quote-icon'>
          <ImQuotesRight/>
        </span>
      </div>
      <div className="author">{name}</div>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}><FcPrevious/></button>
        <button className="next-btn" onClick={nextPerson}><FcNext/></button>
      </div>
      <button className="random-btn" onClick={()=>randomPerson()}>Random User</button>
    </article>
  )
}

export default Review