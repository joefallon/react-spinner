require('./Spinner.css');

import * as React from 'react';

import { SpinnerProps } from './SpinnerProps';

interface SpinnerState {
    shouldHide: boolean
}

export class Spinner extends React.Component<SpinnerProps, SpinnerState> {

    public constructor(props: SpinnerProps) {
        super(props);
        this.state = {
            shouldHide: !!props.displayDelayInMilliSecs
        };

        if(props.displayDelayInMilliSecs > 0) {
            setTimeout(this.show, props.displayDelayInMilliSecs);
        }
    }

    public render(): JSX.Element {
        if(this.state.shouldHide) {
            return (null);
        }

        const spinnerWrapperStyle = {
            display: 'table',
            margin:  '0 auto'
        };

        const size        = this.props.size;
        const borderWidth = this.props.borderWidth ? this.props.borderWidth : 5;
        const light       = this.props.borderTransparencyLight ? this.props.borderTransparencyLight : 0.1;
        const dark        = this.props.borderTransparencyDark ? this.props.borderTransparencyDark : 0.4;

        const spinnerStyle = {
            borderRadius:    '50%',
            WebkitAnimation: 'circle 2s infinite linear',
            animation:       'circle 2s infinite linear',
            width:           `${size}px`,
            height:          `${size}px`,
            border:          `${borderWidth}px solid rgba(0, 0, 0, ${light})`,
            borderLeftColor: `rgba(0, 0, 0, ${dark})`
        };

        return (
            <div style={spinnerWrapperStyle}>
                <div style={spinnerStyle}></div>
            </div>
        );
    }

    private show = () => {
        this.setState({shouldHide: false});
    };
}