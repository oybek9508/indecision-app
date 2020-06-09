class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);       
        this.state = {
        options: []
        }
    }
    componentDidMount(){
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        this.setState(()=> ({options}));
    }
    componentDidUpdate(prevState){
        if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(prevState.options);
        localStorage.setItem('options', json);
        } 
    }
    handleDeleteOptions(){
        this.setState(() =>  ({options: []}))
    }
    handleDeleteOption(optionDeleteText){
       this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionDeleteText !== option;
            })
       }))
    }
    handlePick(){
        this.setState((prevState) => {
                const option = prevState.options[Math.floor(Math.random()*prevState.options.length)]
                alert(option);
        })
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid option'
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'The option already exists'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a Computer';
        return (
            <div>
                <Header subtitle = {subtitle}/>

                <Action 
                handlePick = {this.handlePick}
                hasOptions = {this.state.options.length > 0}/>

                <Options 
                handleDeleteOptions = {this.handleDeleteOptions}
                options = {this.state.options}
                handleDeleteOption = {this.handleDeleteOption}/>

                <AddOption
                handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )  
}
Header.defaultProps = {
    title: 'Some text',
    // subtitle: 'Subtitle of some text'
}


const Action = (props) => {
        return (
            <div>
            <button 
            disabled = {!props.hasOptions}
            onClick = {props.handlePick}>
            What should I do?
            </button>
            </div>
        )    
    }

const Options = (props) => {
        return(
            <div>
            <button onClick = {props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please enter an option to get started!</p>}
            {
                props.options.map((option)=> (<Option 
                key = {option} 
                optionText = {option}
                handleDeleteOption = {props.handleDeleteOption}
                />))
            }
            
            
            </div>
        )
    }


const Option = (props) => {
        return (
            <div>
            {props.optionText}
            <button 
            onClick = {(e) => {
                props.handleDeleteOption(props.optionText)
            }}>
            remove
            </button>
            </div>
        )
    }
 
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){

     e.preventDefault();
     const option = e.target.elements.option.value.trim();
     const error = this.props.handleAddOption(option);
     
     this.setState(() => ({error}))
     
     if(!error){
         e.target.elements.option.value = '';
     }
    }
    render(){
    return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.handleAddOption}>
        <input type = 'text' name = 'option'></input>
        <button>submit</button>
        </form>
        </div>
    )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

