import React from "react";

class App extends React.Component {
    //   constructor(props) {
    //     super(props);
    //   }

    render() {
        return (
            <div>
                <p> <Hello></Hello> {this.props.name.name}</p>
                {this.props.children}
            </div>
        );
    }
}

export default App;