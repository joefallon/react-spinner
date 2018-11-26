import * as tslib_1 from "tslib";
require('./App.css');
import * as React from 'react';
import { Spinner } from '../src/Spinner';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: 'demo-spinner-wrapper' },
                React.createElement("h2", null, "Large Spinner"),
                React.createElement(Spinner, { size: 200, borderWidth: 10, displayDelayInMilliSecs: 500 })),
            React.createElement("div", { className: 'demo-spinner-wrapper' },
                React.createElement("h2", null, "Medium Spinner"),
                React.createElement(Spinner, { size: 100, displayDelayInMilliSecs: 700 })),
            React.createElement("div", { className: 'demo-spinner-wrapper' },
                React.createElement("h2", null, "Small Spinner"),
                React.createElement(Spinner, { size: 50, displayDelayInMilliSecs: 900 })),
            React.createElement("div", { className: 'demo-spinner-wrapper' },
                React.createElement("h2", null, "Tiny Spinner"),
                React.createElement(Spinner, { size: 18, displayDelayInMilliSecs: 1100 }))));
    };
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGVtby9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckIsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFFL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDO0lBQXlCLCtCQUFlO0lBRXBDLGFBQW1CLEtBQVU7ZUFDekIsa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvQkFBTSxHQUFiO1FBQ0ksT0FBTyxDQUNIO1lBQ0ksNkJBQUssU0FBUyxFQUFDLHNCQUFzQjtnQkFDakMsZ0RBQXNCO2dCQUN0QixvQkFBQyxPQUFPLElBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFLEdBQUcsR0FBWSxDQUMzRTtZQUVOLDZCQUFLLFNBQVMsRUFBQyxzQkFBc0I7Z0JBQ2pDLGlEQUF1QjtnQkFDdkIsb0JBQUMsT0FBTyxJQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxHQUFZLENBQzFEO1lBRU4sNkJBQUssU0FBUyxFQUFDLHNCQUFzQjtnQkFDakMsZ0RBQXNCO2dCQUN0QixvQkFBQyxPQUFPLElBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLEdBQVksQ0FDekQ7WUFFTiw2QkFBSyxTQUFTLEVBQUMsc0JBQXNCO2dCQUNqQywrQ0FBcUI7Z0JBQ3JCLG9CQUFDLE9BQU8sSUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFHLHVCQUF1QixFQUFFLElBQUksR0FBWSxDQUMzRCxDQUNKLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQyxBQS9CRCxDQUF5QixLQUFLLENBQUMsU0FBUyxHQStCdkMifQ==