import React, { Component } from 'react'



class AddOrderDateTime extends Component{
    constructor(props){
        super(props)
        //this.handleClick = this.handleClick.bind(this)
        this.onDragStart = this.onDragStart.bind(this)
        this.onDrag = this.onDrag.bind(this)
        this.onDragOver = this.onDragOver.bind(this)
    }

    onDragStart(e){
        console.log('drag start')
        console.log('xPos', e.clientX)
        e.dataTransfer.setData('id', 'id')
    }
    onDragOver(){
        console.log('drag over')
    }
    onDrag(){
        console.log('dragging')
    }
    render(){

        return(
            <div>

            <div className="block3 clearfix">
              <div className="block3-title">
                <h4>Укажите дату и время начала мойки:</h4>
                <p>Заказ создан: <b>19.04.2018 &nbsp&nbsp&nbsp 10:34</b></p>
              </div>
              <div className="block3-form clearfix">
                <form action="">
                  <div className="form-1">
                    <span>Начало мойки:</span>
                    <div className="calendar">
                      <input type="text" value="19/04/2018    10:40" />
                      <button className="button-bnone"><img src={require('../../assets/img/icon/icon-calendar.svg')} alt="" /></button>
                    </div>
                  </div>
                  <div className="form-1">
                    <span>Бокс:</span>
                    <select name="" id="">
                      <option value="">...</option>
                      <option value="">1</option>
                    </select>
                  </div>
                  <div className="form-1">
                    <span>Клиент заберет авто до:</span>
                    <div className="calendar">
                      <input type="text" placeholder="__/__/____    __:__" />
                      <button className="button-bnone"><img src={require('../../assets/img/icon/icon-calendar.svg')} alt="" /></button>
                    </div>
                  </div>
                  <div className="checkbox"><input type="checkbox" id="check" /><label for="check">Отложенный заказ</label></div>
                </form>
              </div>
              <div className="block3-table">
                <div className="table-responsive">
                  <table>
                    <tr>
                      <th>19 <br /> апреля <i className="fa fa-angle-down" aria-hidden="true"></i></th>
                      <th><div className="df"><span className="number">1</span> <img src={require('../../assets/img/icon/icon1.svg')} alt="" /></div> Авто в боксе</th>
                      <th><div className="df"><span className="number">2</span> <img src={require('../../assets/img/icon/icon1.svg')} alt="" /></div> Авто в боксе</th>
                      <th><div className="df"><span className="number gray">3</span><img src={require('../../assets/img/icon/icon1.svg')} alt="" /></div>  Свободен</th>
                      <th><div className="df"><span className="number red">4</span> <img src={require('../../assets/img/icon/icon4.svg')} alt="" /></div>  Нет сигнала</th>
                      <th><div className="df"><span className="number">5</span> <img src={require('../../assets/img/icon/icon1.svg')} alt="" /></div> Авто в боксе</th>
                    </tr>
                    <tr><td>09:00</td><td rowspan="2" className="bg-gray"><div className="dflex"><span>Михаил <br /> <b>BMW X5 777</b></span> <span className="time">9:00 - 11:00</span></div></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>10:00</td><td></td><td></td><td></td><td rowspan="2" className="bg-red"><div className="dflex"><span>Михаил <br /> <b>BMW X5 777</b></span> <span className="time">9:00 - 11:00</span></div></td></tr>
                    <tr><td>11:00</td><td className="bg-green"><div className="dflex"><span>Михаил <br /> <b>BMW X5 777</b></span> <span className="time">9:00 - 11:00</span></div></td><td></td><td></td><td></td></tr>
                    <tr><td>12:00</td><td className="bg-green"><div className="dflex"><span>Михаил <br /> <b>BMW X5 777</b></span> <span className="time">9:00 - 11:00</span></div></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>13:00</td><td></td><td></td><td className="bg-green"><div className="dflex"><span>Михаил <br /> <b>BMW X5 777</b></span> <span className="time">9:00 - 11:00</span></div></td><td></td><td></td></tr>
                    <tr><td>14:00</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>15:00</td><td className="bg-green"><div className="dflex"><span>Михаил <br /> <b>BMW X5 777</b></span> <span className="time">9:00 - 11:00</span></div></td><td></td><td rowspan="2" className="bg-purple"><i className="fa fa-plus-circle" aria-hidden="true"></i></td><td></td><td></td></tr>
                    <tr><td>16:00</td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>17:00</td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>18:00</td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>09:00</td><td></td><td></td><td></td><td></td></tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="switches">
                <button onClick={() => this.props.changeStep(-1)} className="prev active"></button>
                <button onClick={() => this.props.changeStep(1)} className="next"></button>
            </div>

            </div>
        )
    }
}

export default AddOrderDateTime
