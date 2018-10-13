import React, { Component } from 'react'
import Step from './Step'
import Header from './Header'

class CreateOrder extends Component{
    constructor(props){
        super(props)
        this.state = {
            step: 0
        }
        this.changeStep = this.changeStep.bind(this)
    }
    changeStep(dx){
        console.log('High order change step clicked!', dx)
        this.setState({step: this.state.step + dx})
        //this.setState({step: this.state.step + dx})
    }
    render(){
        return (
          <div className="full-height">
            <Header step={this.state.step} />
            <Step step={this.state.step} changeStep={this.changeStep} />
          </div>
        )
    }
}

export default CreateOrder
