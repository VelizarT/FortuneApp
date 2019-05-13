//Here is all of the origin JSX

console.log('App is running');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subTitle: 'Some subtitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
};

const removeOptions = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randNum];
    alert(selectedOption);
};

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
            {
                app.options.map((option, index) => <li key={index}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    const appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};

renderApp();