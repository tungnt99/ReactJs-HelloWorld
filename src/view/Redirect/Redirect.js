import React from 'react'
import { useNavigate } from 'react-router-dom';
import Color from '../HOC/Color';
class Redirect extends React.Component{
    componentDidMount(){
        setTimeout((e) => {
            const navigate = useNavigate();
            e.preventDefault();
            navigate('/todo');

            console.log('check timeout');
        }, 3000);
    }
    render(){
        // console.log('>>> check props: ', this.props);
        return (
          <div>Hello world from Hompage with Thanh Tung & An Khanh</div>
        )

    }
}
export default Color(Redirect);