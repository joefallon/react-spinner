import * as tslib_1 from "tslib";
require('./Spinner.css');
import * as React from 'react';
var Spinner = /** @class */ (function (_super) {
    tslib_1.__extends(Spinner, _super);
    function Spinner(props) {
        var _this = _super.call(this, props) || this;
        _this.show = function () {
            _this.setState({ shouldHide: false });
        };
        _this.state = {
            shouldHide: !!props.displayDelayInMilliSecs
        };
        if (props.displayDelayInMilliSecs > 0) {
            setTimeout(_this.show, props.displayDelayInMilliSecs);
        }
        return _this;
    }
    Spinner.prototype.render = function () {
        if (this.state.shouldHide) {
            return (null);
        }
        var spinnerWrapperStyle = {
            display: 'table',
            margin: '0 auto'
        };
        var size = this.props.size;
        var borderWidth = this.props.borderWidth ? this.props.borderWidth : 5;
        var light = this.props.borderTransparencyLight ? this.props.borderTransparencyLight : 0.1;
        var dark = this.props.borderTransparencyDark ? this.props.borderTransparencyDark : 0.4;
        var spinnerStyle = {
            borderRadius: '50%',
            WebkitAnimation: 'circle 2s infinite linear',
            animation: 'circle 2s infinite linear',
            width: size + "px",
            height: size + "px",
            border: borderWidth + "px solid rgba(0, 0, 0, " + light + ")",
            borderLeftColor: "rgba(0, 0, 0, " + dark + ")"
        };
        return (React.createElement("div", { style: spinnerWrapperStyle },
            React.createElement("div", { style: spinnerStyle })));
    };
    return Spinner;
}(React.Component));
export { Spinner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TcGlubmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXpCLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBUS9CO0lBQTZCLG1DQUEyQztJQUVwRSxpQkFBbUIsS0FBbUI7UUFBdEMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FRZjtRQWtDTyxVQUFJLEdBQUc7WUFDWCxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBM0NFLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyx1QkFBdUI7U0FDOUMsQ0FBQztRQUVGLElBQUcsS0FBSyxDQUFDLHVCQUF1QixHQUFHLENBQUMsRUFBRTtZQUNsQyxVQUFVLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUN4RDs7SUFDTCxDQUFDO0lBRU0sd0JBQU0sR0FBYjtRQUNJLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsSUFBTSxtQkFBbUIsR0FBRztZQUN4QixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUcsUUFBUTtTQUNwQixDQUFDO1FBRUYsSUFBTSxJQUFJLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBTSxLQUFLLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2xHLElBQU0sSUFBSSxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUVoRyxJQUFNLFlBQVksR0FBRztZQUNqQixZQUFZLEVBQUssS0FBSztZQUN0QixlQUFlLEVBQUUsMkJBQTJCO1lBQzVDLFNBQVMsRUFBUSwyQkFBMkI7WUFDNUMsS0FBSyxFQUFlLElBQUksT0FBSTtZQUM1QixNQUFNLEVBQWMsSUFBSSxPQUFJO1lBQzVCLE1BQU0sRUFBYyxXQUFXLCtCQUEwQixLQUFLLE1BQUc7WUFDakUsZUFBZSxFQUFFLG1CQUFpQixJQUFJLE1BQUc7U0FDNUMsQ0FBQztRQUVGLE9BQU8sQ0FDSCw2QkFBSyxLQUFLLEVBQUUsbUJBQW1CO1lBQzNCLDZCQUFLLEtBQUssRUFBRSxZQUFZLEdBQVEsQ0FDOUIsQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUtMLGNBQUM7QUFBRCxDQUFDLEFBaERELENBQTZCLEtBQUssQ0FBQyxTQUFTLEdBZ0QzQyJ9