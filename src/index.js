import React from 'react';
import ReactDOM from 'react-dom';   
import SeasonDisplay from './seasonApp/seasonDisplay';
import Spinner from './seasonApp/spinner';

class App extends React.Component {
    state = {lat : null, errMessage : ""}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat : position.coords.latitude});
            },
            err => {
                this.setState({errMessage : err.message});
            }
        );
    }
    renderContent(){
        if(!this.state.lat && this.state.errMessage){
            return <SeasonDisplay errMessage={this.state.errMessage} />
        }

        if(this.state.lat && !this.state.errMessage){
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please allow your location"/>
       
    }
    render(){
        return(
        <div className="border red">
           {this.renderContent()}
        </div>
        )
        
    };
};
    
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);