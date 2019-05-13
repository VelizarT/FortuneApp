'use strict';

//Here is all of the origin JSX

console.log('App is running');

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subTitle: 'Some subtitle',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
};

var removeOptions = function removeOptions() {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randNum = Math.floor(Math.random() * app.options.length);
    var selectedOption = app.options[randNum];
    alert(selectedOption);
};

var numbers = [55, 101, 1000];

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            'p',
            null,
            app.subTitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { onClick: onMakeDecision, disabled: app.options.length === 0 },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeOptions },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    var appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};

renderApp();
