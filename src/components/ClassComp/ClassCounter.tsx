import React,{Component} from 'react';

type countValue = {
    value:number
}

type messageValue = {
    message:string
}
class ClassComp extends Component<messageValue,countValue>{
    state = {
        value:0,
    }
    increment = () => {
        this.setState(()=>({value:this.state.value+1}))
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>Increment</button><br/>
                {this.state.value}<br/>
                {this.props.message}
                
            </div>
        )
    }
}


export default ClassComp