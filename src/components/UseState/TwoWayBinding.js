import { useState } from "react"

// Random Gifts
const gifts = [
    'CPU i9',
    'RAM 32GB',
    'KEYBOARD RGB'
]
const courses = [
    {
        id: 1,
        name: 'HTML CSS'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'PHP'
    }
]
export default function TwoWayBinding(){
    /**
     * Random array
     */
    const [gift, setGift] = useState();
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    }
    /**
     * validate form
     */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        console.log({
            name, email
        })
    }
    /**
     * TwoWayBinding form type = radio
     */
    const [checkRadio, setCheckRadio] = useState([]);
    // console.log(checkRadio)
    const handleSubmitRadio = () => {
        console.log({id: checkRadio})
    }
    /**
     * vadilate form type checkbox
     */
    const [checkbox, setCheckbox] = useState([]);
    // console.log(checkbox)
    const handleSubmitCheckbox = () => {
        console.log({id: checkbox})
    }
    const handleCheckBox = (id) => {
        setCheckbox(prev => {
            const isChecked = checkbox.includes(id);
            if(isChecked){
                return checkbox.filter(item => item !== id);
            }else{
                return [...prev, id]
            }
        })
    }
    return(
        <>
            <div style={{padding: 18}}>
                <h1>{gift || 'Chưa có phần thưởng'}</h1>
                <button onClick={randomGift}>Update</button>
            </div>
            <h1 style={{textAlign: "center"}}>Random</h1>
            <div style={{padding: 18}}>
                <input 
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
                <input 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <button onClick={handleSubmit}>Register</button>
                <button onClick={() => setName('Nguyen Thanh Tung') }>Changge</button>
            </div>
            <h1 style={{textAlign: "center"}}>validate form</h1>
            <div>
                {courses.map(course =>(
                    <div 
                        key={course.id}
                        name= {course.name}
                    >
                        <input 
                            type="radio" 
                            checked={checkRadio === course.id}
                            onChange={() => setCheckRadio(course.id)}
                            value={course.name}
                        />
                        {course.name}
                    </div>
                ))}
                <button onClick={handleSubmitRadio}>Register</button>
            </div>
            <h1 style={{textAlign: "center"}}>validate form type radio</h1>
            <div>
                {courses.map(course =>(
                    <div key={course.id}>
                        <input 
                            type="checkbox" 
                            checked={checkbox.includes(course.id)}
                            onChange={() => handleCheckBox(course.id)}
                        />
                        {course.name}
                    </div>
                ))}
                <button onClick={handleSubmitCheckbox}>Register</button>
            </div>
            <h1 style={{textAlign: "center"}}>validate form type checkbox</h1>

        </>
    )
}