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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNwaW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekIsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFRL0I7SUFBNkIsbUNBQTJDO0lBRXBFLGlCQUFtQixLQUFtQjtRQUF0QyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQVFmO1FBa0NPLFVBQUksR0FBRztZQUNYLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUEzQ0UsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNULFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLHVCQUF1QjtTQUM5QyxDQUFDO1FBRUYsSUFBRyxLQUFLLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3hEOztJQUNMLENBQUM7SUFFTSx3QkFBTSxHQUFiO1FBQ0ksSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7UUFFRCxJQUFNLG1CQUFtQixHQUFHO1lBQ3hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRyxRQUFRO1NBQ3BCLENBQUM7UUFFRixJQUFNLElBQUksR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFNLEtBQUssR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDbEcsSUFBTSxJQUFJLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRWhHLElBQU0sWUFBWSxHQUFHO1lBQ2pCLFlBQVksRUFBSyxLQUFLO1lBQ3RCLGVBQWUsRUFBRSwyQkFBMkI7WUFDNUMsU0FBUyxFQUFRLDJCQUEyQjtZQUM1QyxLQUFLLEVBQWUsSUFBSSxPQUFJO1lBQzVCLE1BQU0sRUFBYyxJQUFJLE9BQUk7WUFDNUIsTUFBTSxFQUFjLFdBQVcsK0JBQTBCLEtBQUssTUFBRztZQUNqRSxlQUFlLEVBQUUsbUJBQWlCLElBQUksTUFBRztTQUM1QyxDQUFDO1FBRUYsT0FBTyxDQUNILDZCQUFLLEtBQUssRUFBRSxtQkFBbUI7WUFDM0IsNkJBQUssS0FBSyxFQUFFLFlBQVksR0FBUSxDQUM5QixDQUNULENBQUM7SUFDTixDQUFDO0lBS0wsY0FBQztBQUFELENBQUMsQUFoREQsQ0FBNkIsS0FBSyxDQUFDLFNBQVMsR0FnRDNDIn0=