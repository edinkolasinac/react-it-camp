import { render } from "@testing-library/react";
import React from "react";
class Cp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    plus = () => {
        this.setState({ count: this.state.count + 1 });
    }
    minus = () => {
        this.setState({ count: this.state.count - 1 });

    }

    puta = () => {
        this.setState({ count: this.state.count * 2 })
    }




    render() {

        return (
            <div>

                <button onClick={this.plus} className="counter">+</button>
                <button onClick={this.minus} className="minus">-</button>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default Cp;