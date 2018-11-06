import * as React from 'react';
import { SpinnerProps } from './SpinnerProps';
interface SpinnerState {
    shouldHide: boolean;
}
export declare class Spinner extends React.Component<SpinnerProps, SpinnerState> {
    constructor(props: SpinnerProps);
    render(): JSX.Element;
    private show;
}
export {};
