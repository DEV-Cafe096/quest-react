import React from 'react'
import './button.css'

class Button extends React.Component {
    messageAlert = () => {
        alert(`A label desse botão é ${this.props.label}`)
    }
    render() {
        return <div className='container'>
            <button className='btn' onClick={this.messageAlert}>
                <span className='btn-content'>
                    {this.props.label}
                </span>
            </button>
        </div>
    }
}


Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button