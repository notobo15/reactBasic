import React from 'react'

class MyComponent extends React.Component {
    state = {  
        name: 'fadfvxxcsfdsf',
        age: 18,
    } 

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClickAlert = () => {
        alert()
    }
    render() {

        return (
            <>
            <div>hello my component Hoi Dan IT</div>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state['name']}

                    <button
                        onClick={() => this.handleClickAlert()}
                    >Click me!!</button>
                </div>
            </>
        )

    }
}

 
export default MyComponent;