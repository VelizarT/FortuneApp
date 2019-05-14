class FortuneApp extends React.Component {
    constructor(props) {
        super(props);
        this.onRemoveAll = this.onRemoveAll.bind(this);
        this.state = {
            title: 'Fortune',
            subtitle: 'Click and see what\'s your fortune',
            options: ['Thing One', 'Thing Two', 'Thing Three', 'Thing four']
        };
    };

    onRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    };

    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action hasOptions={this.state.options.length > 0} options={this.state.options} />
                <Options 
                    options={this.state.options} 
                    onRemoveAll={this.onRemoveAll}/>
                <AddOption />   
            </div>
        );
    };
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    };
}

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.onMakeDecision = this.onMakeDecision.bind(this);
    }
    onMakeDecision() {
        const randNum = Math.floor(Math.random() * this.props.options.length);
        const selectedOption = this.props.options[randNum];
        alert(selectedOption);
    };

    render() {
        return (
            <div>
                <button onClick={this.onMakeDecision}>What should I do?</button>
            </div>
        );
    };
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options Component here</p>
                <button onClick={this.props.onRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} option={option}/>
                    })
                }
                
            </div>
        );
    };
}

class Option extends React.Component {
    render() {
        return (
            <div>Option: {this.props.option}</div>
        );
    }
}

class AddOption extends React.Component {
    onAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option) {
            alert(option);
        }
        
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    };
}

ReactDOM.render(<FortuneApp />, document.getElementById('app'));