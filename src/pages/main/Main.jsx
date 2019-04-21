import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import City from '../city/City';
import './Main.scss';

class Main extends React.Component {
    render() {
        return (
            <main className='weather__main main'>
                <Switch>
                    <Route
                        exact path='/' 
                        render={() => <Home 
                            randomCitiesWeather={this.props.randomCitiesWeather} 
                            url={this.props.url} 
                        />}
                    />
                    <Route path='/city/:cityKey/' component={City}/>
                </Switch>
            </main>
        )
    }
}

export default Main;