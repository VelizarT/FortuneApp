'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//classbased vs stateless functional components

var FortuneApp = function (_React$Component) {
    _inherits(FortuneApp, _React$Component);

    function FortuneApp(props) {
        _classCallCheck(this, FortuneApp);

        var _this = _possibleConstructorReturn(this, (FortuneApp.__proto__ || Object.getPrototypeOf(FortuneApp)).call(this, props));

        _this.onRemoveAll = _this.onRemoveAll.bind(_this);
        _this.onMakeDecision = _this.onMakeDecision.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.state = {
            title: 'Fortune',
            subtitle: 'Click and see what\'s your fortune',
            options: []
        };
        return _this;
    }

    _createClass(FortuneApp, [{
        key: 'onRemoveAll',
        value: function onRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'onMakeDecision',
        value: function onMakeDecision() {
            var randNum = Math.floor(Math.random() * this.state.options.length);
            var selectedOption = this.state.options[randNum];
            alert(selectedOption);
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This item alredy exists';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    title: this.state.title,
                    subtitle: this.state.subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    onMakeDecision: this.onMakeDecision }),
                React.createElement(Options, {
                    options: this.state.options,
                    onRemoveAll: this.onRemoveAll }),
                React.createElement(AddOption, {
                    addOption: this.addOption })
            );
        }
    }]);

    return FortuneApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.onMakeDecision },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Options Component here'
        ),
        React.createElement(
            'button',
            { onClick: props.onRemoveAll },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, option: option });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        'Option: ',
        props.option
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.onAddOption = _this2.onAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'onAddOption',
        value: function onAddOption(e) {

            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.addOption(option);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.onAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(FortuneApp, null), document.getElementById('app'));
