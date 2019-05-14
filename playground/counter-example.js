class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onPlusOne = this.onPlusOne.bind(this);
        this.onMinusOne = this.onMinusOne.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    onPlusOne() {

        //setState is async
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    };

    onMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        }); 
    };

    onReset() {
        //Old Way
        // this.setState({
        //     count: 0
        // });
        this.setState((prevState) => {
            return {
                count: 0
            }
        });
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.onPlusOne}>+1</button>
                <button onClick={this.onMinusOne}>-1</button>
                <button onClick={this.onReset}>reset</button>
            </div>
        );  
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={2}/>, document.getElementById('app'));


// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();