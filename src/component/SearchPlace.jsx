import React from 'react'
import { useState } from 'react'
import MapContainer from './MapContainer'
import './SearchPlace.css'

const SearchPlacs = () => {
    const [inputText, setInputText] = useState("");
    const [place, setPlace] = useState("");

    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(inputText);
        setInputText("");
    }

  return (
    <div className='SearchPlace-box'>
        <h1 className='SearchPlace-Main-text'>어떤 운동 좋아하세요?</h1>
        <form className='inputForm' onSubmit={handleSubmit}>
            <div className="SearchPlace-input-box">
                <input
                    placeholder='Search Place'
                    onChange={onChange}
                    value={inputText}
                ></input>
                <button type='submit'>🔍</button>
            </div>

            <div className='SearchPlace-tag-box'>
                <div className='SearchPlace-tag-content'>헬스</div>
                <div className='SearchPlace-tag-content'>요가</div>
                <div className='SearchPlace-tag-content'>복싱</div>
                <div className='SearchPlace-tag-content'>골프</div>
                <div className='SearchPlace-tag-content'>크로스핏</div>
                <div className='SearchPlace-tag-content'>G.X</div>
                <div className='SearchPlace-tag-content'>수영</div>
                <div className='SearchPlace-tag-content'>주짓수</div>
            </div>
            <MapContainer searchPlace={place}></MapContainer>
        </form>
    </div>
  )
}

export default SearchPlacs