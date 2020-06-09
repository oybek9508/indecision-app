
const app = {
    title: 'Indecision-app',
    subtitle: 'Put your life into the computer program',
    options: []
}

const onFormSubmit = (e) => {

        const option = e.target.elements.option.value;

        if(option){
            app.options.push(option);
            e.target.elements.option.value = '';
            renderSubmitApp();
        }
        e.preventDefault();
}

const removeAll = () => {
        app.options.length = 0;
        renderSubmitApp();
}
const remove = () => {
    app.options.pop();
    renderSubmitApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
}

const appRoot = document.getElementById('app');

const renderSubmitApp = () => {
const templateApp = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
    <ol>
    {
     app.options.map((option) => {
       return <li key = {option} text = 'text'>  {option}</li>
     })
    }
    </ol>

    <form onSubmit = {onFormSubmit} >
    <input type = 'text' name = 'option'></input>
    <button disabled = {app.options.length === 0} onClick = {onMakeDecision}>What should I do?</button>
    <button>Add option</button>
    <button onClick = {remove}>Remove</button>
    <button onClick = {removeAll}>Remove All</button> 
     

     
    </form>

    </div>
);
ReactDOM.render(templateApp, appRoot);
}

renderSubmitApp();



