import React from 'react';
import ReactDOM from 'react-dom';

//classbased vs stateless functional components

class FortuneApp extends React.Component {
    constructor(props) {
        super(props);
        this.onRemoveAll = this.onRemoveAll.bind(this);
        this.onMakeDecision = this.onMakeDecision.bind(this);
        this.addOption = this.addOption.bind(this);
        this.onRemoveOption = this.onRemoveOption.bind(this);
        this.state = {
            subtitle: 'See into your future',
            options: props.options
        };
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            //Do nothing at all
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    onRemoveAll() {
        this.setState(() => ({ options: []}));
    }

    onRemoveOption(optionToDelete) {
        this.setState((prevState) => {
            // prevState.options.splice(prevState.options.indexOf(option), 1);
            return {
                options: prevState.options.filter((option) => option !== optionToDelete)
            }
        });
    }

    onMakeDecision() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randNum];
        if(selectedOption !== undefined) {
            alert(selectedOption);
        } else {
            alert('Please add options first');
        }
    }

    addOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item alredy exists';
        }
       this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

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
                    onRemoveAll={this.onRemoveAll}
                    onRemoveOption={this.onRemoveOption}/>
                <AddOption 
                    addOption={this.addOption}/>
            </div>
        );
    }
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
                {props.options.length === 0 && <p>Please add an option to get started</p>}
                {
                    props.options.map((option) => (
                             <Option 
                                key={option} 
                                option={option} 
                                onRemoveOption={props.onRemoveOption} />
                    ))
                }
                
            </div>
        );
};

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={(e) => {
                props.onRemoveOption(props.option);
            }}>Remove</button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onAddOption = this.onAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    onAddOption(e) {

        e.preventDefault();

        const option = e.target.elements.option.value.trim();
          const error = this.props.addOption(option);
        
        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        }

    }

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
    }
}

ReactDOM.render(<FortuneApp />, document.getElementById('app'));