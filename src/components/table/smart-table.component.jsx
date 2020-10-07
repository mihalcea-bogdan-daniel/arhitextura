import React from 'react';
import './smart-table.styles.scss'

import Grid from '../../components/grid-container/grid-container.component'
import Input from '../inputs/input.component'

class SumTable extends React.Component{
    constructor(){
        super()
        this.state = {
            total:0.00
        }
    }

    calculateTotal = (object) => {
        let _total = 0.00;
        let cam_total = 0.00;
        for (const key in object) {
            if (object.hasOwnProperty(key) && key !== "total" && 
            (key==="mentinut" || key==="propus") && !key.includes("cam")
            ) {
                const element = !isNaN(parseFloat(object[key])) ? parseFloat(object[key]) : 0.00;
                _total= element + _total;
                
            } else if (this.props.locuibil && object.hasOwnProperty(key) && key.includes("cam") &&
            (key==="mentinut-cam" || key==="propus-cam")
            ){
                const cam_element = !isNaN(parseFloat(object[key])) ? parseFloat(object[key]) : 0;
                cam_total = cam_element + cam_total;
            }
        }
        this.setState(prevState => {
            return(
                {...prevState, total:_total.toFixed(2), cam_total:cam_total}
            )
        })
    }
    
    handleInput = (e)=> {
        e.preventDefault();
        const {value, name} = e.target
        const obj = {}
        obj[name]= isNaN(obj) ? parseFloat(value) : 0.00;
        this.setState(prevState => {
            return(
                {...prevState, ...obj}
            )
        }, () => {

            this.calculateTotal(this.state)
        })
        
    }
    render(){
        if(this.props.locuibil){
            return(
            <>  
                <div style={{whiteSpace:"pre-wrap"}}>{`${this.props.header ? this.props.header:"" }`}</div>
                <div>
                    <Input className="centrat" name="existent"  onInput = {this.handleInput} suffix = {this.props.suffix} style={{margin:"0"}}></Input>/
                    <Input className="centrat" name="existent-cam"  onInput = {this.handleInput} suffix = "cam." style={{margin:"0", width:"35px"}}></Input>
                </div>
                <div>
                    <Input className="centrat" name="desfiintat"  onInput = {this.handleInput} suffix = {this.props.suffix} style={{margin:"0"}}></Input>/
                    <Input className="centrat" name="desfiintat-cam"  onInput = {this.handleInput} suffix = "cam." style={{margin:"0", width:"35px"}}></Input>
                </div>
                <div>
                    <Input className="centrat" name="mentinut"  onInput = {this.handleInput} suffix = {this.props.suffix} style={{margin:"0"}}></Input>/
                    <Input className="centrat" name="mentinut-cam"  onInput = {this.handleInput} suffix = "cam." style={{margin:"0", width:"35px"}}></Input>
                </div>
                <div>
                    <Input className="centrat" name="propus"  onInput = {this.handleInput} suffix = {this.props.suffix} style={{margin:"0"}}></Input>/
                    <Input className="centrat" name="propus-cam"  onInput = {this.handleInput} suffix = "cam." style={{margin:"0", width:"35px"}}></Input>
                </div>

                <div>{this.state.total} {this.props.suffix}/{this.state.cam_total} {"cam."}</div>
        </>
            )
        }
    return (
        <>  
            <div style={{whiteSpace:"pre-wrap"}}>{`${this.props.header ? this.props.header:"" }`}</div>
            <div><Input className="centrat" name="existent"  onInput = {this.handleInput} suffix={this.props.suffix} style={{margin:"0"}}></Input></div>
            <div><Input className="centrat" name="desfiintat"  onInput = {this.handleInput} suffix={this.props.suffix} style={{margin:"0"}}></Input></div>
            <div><Input className="centrat" name="mentinut"  onInput = {this.handleInput} suffix={this.props.suffix} style={{margin:"0"}}></Input></div>
            <div><Input className="centrat" name="propus"  onInput = {this.handleInput} suffix={this.props.suffix} style={{margin:"0"}}></Input></div>

            <div>{this.state.total} {this.props.suffix}</div>
        </>
    )
    }
}




const SmartTable = () => {
    return (
        <div>
            <Grid columns = {5} rows = {6} className = "smart-table">
                <div>Construcţii</div>
                <div style={{textAlign:"left"}}><span style={{marginLeft:"20px",display:"list-item"}}>existente, din care:</span></div>
                <div style={{textIndent:"40px", textAlign:"left"}}>-desfiinţate</div>
                <div style={{textIndent:"40px", textAlign:"left"}}>-menţinute</div>
                <div style={{textAlign:"left"}}><span style={{marginLeft:"20px",display:"list-item"}}>propuse:</span></div>
                <div >TOTAL</div>
                <SumTable 
                header = {"Suprafaţă\nconstruită"}
                suffix = "m²"/>
                <SumTable 
                header = {"Suprafaţă\ndesfăşurată"}
                suffix = "m²"/>
                <SumTable
                header = {"Suprafaţa\nutilă"}
                suffix = "m²"/>
                <SumTable
                header = {"Suprafaţă locuibilă/\nnr.cam"}
                suffix = "m²" locuibil/>
            
                
            </Grid>
        </div>
    );
}

export default SmartTable;
