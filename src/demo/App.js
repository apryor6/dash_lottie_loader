/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

// import LottieLoader from '../lib';
import LottieLoader from '../lib/components/LottieLoader.react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
            label: 'test initial label',
            isFinishedLoading: false
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (

            <div>
                <h1>Hello, Dash!</h1>
                <LottieLoader setProps={this.setProps} {...this.state}>
                    <h2>Loaded results</h2>
                </LottieLoader>
            </div>
        )
    }
}
/*
* <LottieLoader {...this.state}>
* 
*/
export default App;
