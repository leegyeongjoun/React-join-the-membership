import React, { Component } from 'react';
import DaumPostcode from "react-daum-postcode";

class Postcode extends Component {
    onCompletePost = (data) => {
        // console.log(data)
        this.props.onChangeAddress1((data.address))
    }
    render() {
        const postStyle = {
            position:'fixed',
            top:'50%',
            left:'50%',
            width:'400px',
            height:'500px',
            background:'#fff',
            zIndex:'2',
            border:'1px solid #ccc',
            marginLeft:'-200px',
            marginTop:'-250px'
        }
        return (
            <div>
                {/* autoclose는 주소 선택하면 꺼지게 */}
                <DaumPostcode style={postStyle} autoClose onComplete={this.onCompletePost}/>
            </div>
        );
    }
}

export default Postcode;
