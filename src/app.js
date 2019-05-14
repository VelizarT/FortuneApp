//classbased vs stateless functional components

class FortuneApp extends React.Component {
    constructor(props) {
        super(props);
        this.onRemoveAll = this.onRemoveAll.bind(this);
        this.onMakeDecision = this.onMakeDecision.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            subtitle: 'See into your future',
            options: props.options
        };
    };

    onRemoveAll() {
        this.setState(() => ({ options: []}));
    };

    onMakeDecision() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randNum];
        alert(selectedOption);
    };

    addOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item alredy exists';
        }
       this.setState((prevState) => ({ options: prevState.options.concat(option) }));
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

FortuneApp.defaultProps = {
    options: []
};

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
};

Header.defaultProps = {
    title: 'Fortune App'
};

const Action = (props) => {
        return (
            <div>
                <button onClick={props.onMakeDecision}>What should I do?</button>
            </div>
        );
};

const Options = (props) => {
        return (
            <div>
                <p>Options Component here</p>
                <button onClick={props.onRemoveAll}>Remove All</button>
                {
                    props.options.map((option) => {
                        return <Option key={option} option={option}/>
                    })
                }
                
            </div>
        );
};

const Option = (props) => {
        return (
            <div>Option: {props.option}</div>
        );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onAddOption = this.onAddOption.bind(this);
        this.state = {
            error: undefined
        }
    };

    onAddOption(e) {

        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.addOption(option);
        
        this.setState(() => ({ error }));

    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    };
}

ReactDOM.render(<FortuneApp options={['The Valuty Towers', 'Cubin One']}/>, document.getElementById('app'));