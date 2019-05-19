import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class FortuneApp extends React.Component {
    state = {
        title: 'Fortune App',
        options: [],
        selectedOption: undefined
    };

    onRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    };

    onRemoveOption = (optionToDelete) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => option !== optionToDelete)
            }
        });
    };

    onCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    };

    onMakeDecision = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randNum];
        if (selectedOption !== undefined) {
            this.setState(() => ({ selectedOption }));
        } else {
            alert('Please add options first');
        }
    };

    addOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item alredy exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        return (
            <div>
                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        onMakeDecision={this.onMakeDecision} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            onRemoveAll={this.onRemoveAll}
                            onRemoveOption={this.onRemoveOption} />
                        <AddOption
                            addOption={this.addOption} />
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        onCloseModal={this.onCloseModal} />
                </div>
            </div>
        );
    }
}