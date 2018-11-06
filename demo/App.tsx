require('./App.css');

import * as React from 'react';

import { Spinner } from '../src/Spinner';

export class App extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                <div className='demo-spinner-wrapper'>
                    <h2>Large Spinner</h2>
                    <Spinner size={200} borderWidth={10} displayDelayInMilliSecs={500}></Spinner>
                </div>

                <div className='demo-spinner-wrapper'>
                    <h2>Medium Spinner</h2>
                    <Spinner size={100} displayDelayInMilliSecs={700}></Spinner>
                </div>

                <div className='demo-spinner-wrapper'>
                    <h2>Small Spinner</h2>
                    <Spinner size={50} displayDelayInMilliSecs={900}></Spinner>
                </div>

                <div className='demo-spinner-wrapper'>
                    <h2>Tiny Spinner</h2>
                    <Spinner size={18}  displayDelayInMilliSecs={1100}></Spinner>
                </div>
            </div>
        );
    }
}