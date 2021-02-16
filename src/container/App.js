import React, { Component } from 'react';
import { machines } from '../machines';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';


class App extends Component {
    constructor() {
        super()
        this.state = {
            machines: machines,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })   
    }

    render() {
        const filteredMachines = this.state.machines.filter(machines => {
            return machines.username.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1 white'>SkyNet Machines!</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <p className='dark-blue'>Choose your prototype for future.</p> 
                <Scroll>
                <CardList machines={filteredMachines}/>
                </Scroll>
            </div>
        );
    }
    
}

export default App;