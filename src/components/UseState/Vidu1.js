import { useState } from "react";
// import { useOrder } from "react";

const orders = [100, 200, 300];
export default function UseState(){
    const [counter, setCounter] = useState(1);
    const handleIncrease =() => {
        // setCounter(counter + 1);
        setCounter(prevState => prevState + 1);
        // setCounter(prevState => prevState + 1);
        // setCounter(prevState => prevState + 1);
    }
    const handleIncreaseHieu = () => {
        if(counter >= 1){
            setCounter(counter-1)
        }
    }

     const [info, setInfo] = useState({
        name: 'Nguyen Thanh Tung',
        age: 24
    })
    const handleUpdate = () => {
        setInfo(prev => ({
            ...prev,
            address: 'An Khanh, Hoai Duc'
        }))
    }

    const [order, setOrder] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur)
        return total;
    })
    const handleTotalTong = () => {
        setOrder(prevState=> prevState + 1);
    }
    const handleTotalHieu = () => {
        setOrder(prevState=> prevState + 1);
    }
    return(
        <>
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={handleIncreaseHieu}>Increase -</button>

            <button onClick={handleIncrease}>Increase +</button>
        </div>
        <div>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
        <div className="App">
            <h1>{order}</h1>
                <button onClick={handleTotalHieu}>Increase -</button>
                <button onClick={handleTotalTong}>Increase +</button>
        </div>
        <h2 style={{textAlign: "center"}}>Ví dụ 1</h2>
        </>
    )
}