class FortuneApp extends React.Component {
    constructor(props) {
        super(props);
        this.onRemoveAll = this.onRemoveAll.bind(this);
        this.onMakeDecision = this.onMakeDecision.bind(this);
        this.addOption = this.addOption.bind(this);
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

    onMakeDecision() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randNum];
        alert(selectedOption);
    };

    addOption(option) {
       this.setState((prevState) => {
           return {
                options: prevState.options.concat(option)
            }
       });
    };

    render() {
        return (
            <div>
                <Header 
                    title={this.state.title} 
                    subtitle={this.state.subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    onMakeDecision={this.onMakeDecision} />
                <Options 
                    options={this.state.options} 
                    onRemoveAll={this.onRemoveAll}/>
                <AddOption 
                    addOption={this.addOption}/>
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
    render() {
        return (
            <div>
                <button onClick={this.props.onMakeDecision}>What should I do?</button>
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
    constructor(props) {
        super(props);
        this.onAddOption = this.onAddOption.bind(this);
    }
    onAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option) {
            this.props.addOption(option);
            e.target.elements.option.value = '';
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