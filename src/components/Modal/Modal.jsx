import { Component } from "react";

export class Modal extends Component{
    state={}

    componentDidMount(){
        window.addEventListener('keydown', this.handlePressESC)
    }

    componentWillUnmount(){
        window.addEventListener('keydown', this.handlePressESC)
    }

    handlePressESC = (event) => {
        if (event.code === 'Escape') this.props.closeModal()
    }

    render(){
        const { closeModal, urlLarge, tags} = this.props
        return(
            
            <div className="overlay">
                <div className="modal">
                    PIZDEC
                    <img src={urlLarge} alt={tags} onClick={closeModal}/>
                </div>
            </div>
        )
    }
}