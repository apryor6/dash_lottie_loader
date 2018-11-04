import React, {Component} from 'react';
import PropTypes from 'prop-types';
import animationData from './data/default.json'
import Lottie from 'react-lottie'

export default class LottieLoader extends Component {

    constructor(props){
        super(props);
        const { isFinishedLoading } = this.props
        this.state = {
            isStopped: false,
            isPaused: false,
        };

    }

    render(){
        const defaultProps = {
            height: 500,
            isPaused: false,
            isStopped: false,
            width: 300,
            options: {
              loop: true,
              autoplay: true,
              animationData: animationData,
            },
            noMessage: false,
            error: null,
            noData: false,
            uberFacts: null,
            isMobile: false,
            loadingLottieDivMarginTop: 30,
        };
        console.log(defaultProps);
        // const { children, isFinishedLoading } = this.props
        const { children, setProps, isFinishedLoading, style } = this.props
        // const { children, setProps } = this.props
        // const { isFinishedLoading } = this.state 

        // if (setProps)
        // {
        //     setTimeout(() => setProps({
        //         isFinishedLoading: true
        //     }), 1000)
        // } else {
        //     setTimeout(() => this.setState({
        //         isFinishedLoading: true
        //     }), 1000)
        // }

        if (isFinishedLoading){
            /* Stop the animation */
            return children
        } else {
            /* Play animation */
        } return (
            <div style={style}>
                <Lottie {...defaultProps} {...this.state}></Lottie>
                <h2 style={{width: '100%'}}>Loading...</h2>
                <button onClick={() => this.setState({isStopped: true})}>stop</button>
                <button onClick={() => this.setState({isStopped: false})}>play</button>
                <button onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
            </div>
        )
    }
}

LottieLoader.defaultProps = {};

LottieLoader.propTypes = {

    /**
     * The children of this component
     */
    children: PropTypes.node,

    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /*
    * Animation plays until true
    */
    isFinishedLoading: PropTypes.bool,


    /**
     * Defines CSS styles which will override styles previously set.
     */
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
