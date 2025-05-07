"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardChart;
var react_1 = require("react");
// Using canvas APIs directly for better performance than chart.js
function DashboardChart(_a) {
    var data = _a.data, title = _a.title, type = _a.type, _b = _a.className, className = _b === void 0 ? '' : _b;
    var canvasRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!canvasRef.current)
            return;
        var ctx = canvasRef.current.getContext('2d');
        if (!ctx)
            return;
        // Clear canvas
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        // Set canvas dimensions
        var dpr = window.devicePixelRatio || 1;
        var rect = canvasRef.current.getBoundingClientRect();
        canvasRef.current.width = rect.width * dpr;
        canvasRef.current.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        // Set canvas styling
        canvasRef.current.style.width = "".concat(rect.width, "px");
        canvasRef.current.style.height = "".concat(rect.height, "px");
        // Draw chart based on type
        if (type === 'bar') {
            drawBarChart(ctx, data, rect.width, rect.height);
        }
        else if (type === 'line') {
            drawLineChart(ctx, data, rect.width, rect.height);
        }
        else if (type === 'pie') {
            drawPieChart(ctx, data, rect.width, rect.height);
        }
    }, [data, type]);
    var drawBarChart = function (ctx, data, width, height) {
        var labels = data.labels, values = data.values;
        var barWidth = (width - 60) / labels.length - 10;
        var maxValue = Math.max.apply(Math, values) * 1.1;
        // Draw y-axis
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.moveTo(40, 20);
        ctx.lineTo(40, height - 40);
        ctx.stroke();
        // Draw x-axis
        ctx.beginPath();
        ctx.moveTo(40, height - 40);
        ctx.lineTo(width - 20, height - 40);
        ctx.stroke();
        // Draw bars
        values.forEach(function (value, index) {
            var _a;
            var x = 50 + index * (barWidth + 10);
            var barHeight = ((height - 60) * value) / maxValue;
            var y = height - 40 - barHeight;
            // Draw bar
            var color = ((_a = data.colors) === null || _a === void 0 ? void 0 : _a[index]) || "hsl(".concat(index * 36, ", 70%, 60%)");
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.roundRect(x, y, barWidth, barHeight, 4);
            ctx.fill();
            // Draw label
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(labels[index], x + barWidth / 2, height - 25);
            // Draw value
            ctx.fillText(value.toString(), x + barWidth / 2, y - 5);
        });
    };
    var drawLineChart = function (ctx, data, width, height) {
        var labels = data.labels, values = data.values;
        var maxValue = Math.max.apply(Math, values) * 1.1;
        var pointSpacing = (width - 60) / (labels.length - 1);
        // Draw axes
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        // Y-axis
        ctx.beginPath();
        ctx.moveTo(40, 20);
        ctx.lineTo(40, height - 40);
        ctx.stroke();
        // X-axis
        ctx.beginPath();
        ctx.moveTo(40, height - 40);
        ctx.lineTo(width - 20, height - 40);
        ctx.stroke();
        // Draw grid lines
        for (var i = 0; i < 5; i++) {
            var y = 20 + i * (height - 60) / 4;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.beginPath();
            ctx.moveTo(40, y);
            ctx.lineTo(width - 20, y);
            ctx.stroke();
            // Draw y-axis labels
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'right';
            var label = Math.round(maxValue * (4 - i) / 4);
            ctx.fillText(label.toString(), 35, y + 3);
        }
        // Plot points and line
        var points = values.map(function (value, index) {
            var x = 40 + index * pointSpacing;
            var y = height - 40 - ((height - 60) * value) / maxValue;
            return [x, y];
        });
        // Draw line
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        points.forEach(function (point, index) {
            if (index === 0) {
                ctx.moveTo(point[0], point[1]);
            }
            else {
                ctx.lineTo(point[0], point[1]);
            }
        });
        ctx.stroke();
        // Draw area under the line
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        points.forEach(function (point) {
            ctx.lineTo(point[0], point[1]);
        });
        ctx.lineTo(points[points.length - 1][0], height - 40);
        ctx.lineTo(points[0][0], height - 40);
        ctx.closePath();
        ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.fill();
        // Draw points
        points.forEach(function (point, index) {
            ctx.fillStyle = 'rgba(59, 130, 246, 1)';
            ctx.beginPath();
            ctx.arc(point[0], point[1], 4, 0, 2 * Math.PI);
            ctx.fill();
            // Draw outer circle
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(point[0], point[1], 6, 0, 2 * Math.PI);
            ctx.stroke();
            // Draw x-axis labels
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(labels[index], point[0], height - 25);
        });
    };
    var drawPieChart = function (ctx, data, width, height) {
        var labels = data.labels, values = data.values;
        var total = values.reduce(function (sum, value) { return sum + value; }, 0);
        var radius = Math.min(width, height) / 2 - 40;
        var centerX = width / 2;
        var centerY = height / 2;
        var startAngle = 0;
        // Draw pie slices
        values.forEach(function (value, index) {
            var _a;
            var sliceAngle = (value / total) * 2 * Math.PI;
            var endAngle = startAngle + sliceAngle;
            var color = ((_a = data.colors) === null || _a === void 0 ? void 0 : _a[index]) || "hsl(".concat(index * 36, ", 70%, 60%)");
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fill();
            // Calculate position for the label
            var middleAngle = startAngle + sliceAngle / 2;
            var labelRadius = radius * 0.7;
            var labelX = centerX + labelRadius * Math.cos(middleAngle);
            var labelY = centerY + labelRadius * Math.sin(middleAngle);
            // Draw label
            var percent = Math.round((value / total) * 100);
            if (percent > 5) { // Only draw labels for slices that are large enough
                ctx.fillStyle = 'white';
                ctx.font = '12px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText("".concat(percent, "%"), labelX, labelY);
            }
            startAngle = endAngle;
        });
        // Draw legend
        var legendX = width - 120;
        var legendY = 30;
        labels.forEach(function (label, index) {
            var _a;
            var y = legendY + index * 20;
            var color = ((_a = data.colors) === null || _a === void 0 ? void 0 : _a[index]) || "hsl(".concat(index * 36, ", 70%, 60%)");
            // Draw color box
            ctx.fillStyle = color;
            ctx.fillRect(legendX, y, 12, 12);
            // Draw label
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(label, legendX + 20, y + 9);
        });
    };
    return (<div className={"rounded-lg p-4 ".concat(className)}>
      <h3 className="text-lg font-medium mb-4 text-slate-300">{title}</h3>
      <canvas ref={canvasRef} className="w-full h-60"/>
    </div>);
}
