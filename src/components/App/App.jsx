import React from 'react'
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
 
const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: 'NAME IT!',
            headerExpanded: true,
            suggestedNames: [],
        };

    }


    handleInputChange = (inputText) => {
        
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
        // console.log('Input text -', inputText);
    }; 
   

    render() {
        return (
            <div>
                <Header headerExpanded ={this.state.headerExpanded} headTitle={this.state.headerText} />
                <SearchBox handleInputChange={this.handleInputChange}/>
                <ResultsContainer suggestedNames = {this.state.suggestedNames} />
            </div>
        );

    }

}



export default App;
