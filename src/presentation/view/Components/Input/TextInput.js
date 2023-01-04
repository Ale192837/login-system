import React from "react";
import "../../Styles/loginContainer.css";

export default class TextInput extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {};  
    }
    
    setValue(e){

        this.setState({value: e.target.value});
        this.props.onChangeValue(e.target.value); // send value to parent
      
    }
    
    render(){


        return(
            <div className=" flex flex-col w-full">

                <div className=" basis-5/12 flex justify-start pl-1 pb-1">
                    <label>{this.props.label}</label>
                </div>

                <div className=" basis-7/12 ">
                    <form>
                        <input type={this.props.type} className="text-input h-8"
                        value={this.state.value} onChange={e => this.setValue(e)}
                        />
                    </form>
                </div>

            </div>
        )
    }

}