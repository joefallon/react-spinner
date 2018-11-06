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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJCLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRS9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6QztJQUF5QiwrQkFBZTtJQUVwQyxhQUFtQixLQUFVO2VBQ3pCLGtCQUFNLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRU0sb0JBQU0sR0FBYjtRQUNJLE9BQU8sQ0FDSDtZQUNJLDZCQUFLLFNBQVMsRUFBQyxzQkFBc0I7Z0JBQ2pDLGdEQUFzQjtnQkFDdEIsb0JBQUMsT0FBTyxJQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLEdBQVksQ0FDM0U7WUFFTiw2QkFBSyxTQUFTLEVBQUMsc0JBQXNCO2dCQUNqQyxpREFBdUI7Z0JBQ3ZCLG9CQUFDLE9BQU8sSUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLEdBQUcsR0FBWSxDQUMxRDtZQUVOLDZCQUFLLFNBQVMsRUFBQyxzQkFBc0I7Z0JBQ2pDLGdEQUFzQjtnQkFDdEIsb0JBQUMsT0FBTyxJQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxHQUFZLENBQ3pEO1lBRU4sNkJBQUssU0FBUyxFQUFDLHNCQUFzQjtnQkFDakMsK0NBQXFCO2dCQUNyQixvQkFBQyxPQUFPLElBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRyx1QkFBdUIsRUFBRSxJQUFJLEdBQVksQ0FDM0QsQ0FDSixDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsVUFBQztBQUFELENBQUMsQUEvQkQsQ0FBeUIsS0FBSyxDQUFDLFNBQVMsR0ErQnZDIn0=