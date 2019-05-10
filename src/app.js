//Here is all of the origin JSX

console.log('App is running');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subTitle: 'Some subtitle',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>  
    </div>
);

const user = {
    name: 'Velizar',
    age: 26,
    location: 'Leatherhead'
};

const getLocation = (location) => {
    if(location) {
        return <p> Location: {location} </p>;
    }
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

// Same as above: var template = React.createElement("h1", { id: "some-id" }, "This is JSX from app.js");

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);