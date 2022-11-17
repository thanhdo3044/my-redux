import { Component } from "react"
import "./button.css"

class Button extends Component {

    render() {
        return (
            <button className="btn" id={this.props.id} value={this.props.value} onClick={this.props.onClick}>
                {this.props.button}
            </button>
        )

    }
}

export default Button;
