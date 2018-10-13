import React, { Component } from 'react'
import classNames from 'classnames'

class Worker extends Component{
    constructor(props){
        super(props)
        this.handleCheckClicked = this.handleCheckClicked.bind(this)
    }
    handleCheckClicked(){
        this.props.workerClicked()
    }
    render(){
        const { name, post, phoneCode, phoneNumber, isSelected } = this.props
        return (
             <tr><td><img src={require('../../assets/img/user.png')} alt="" /></td> <td>{name}</td> <td>{post}</td> <td>{phoneCode} {phoneNumber}</td><td><button onClick={this.handleCheckClicked} className={classNames('check', {'active': isSelected})}></button></td></tr>
        )
    }
}

export default Worker
