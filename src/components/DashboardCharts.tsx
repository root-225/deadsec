'use client';

import { useEffect, useRef } from 'react';

interface ChartProps {
  data: {
    labels: string[];
    values: number[];
    colors?: string[];
  };
  title: string;
  type: 'bar' | 'line' | 'pie';
  className?: string;
}

// Using canvas APIs directly for better performance than chart.js
export default function DashboardChart({ data, title, type, className = '' }: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1;
    const rect = canvasRef.current.getBoundingClientRect();
    
    canvasRef.current.width = rect.width * dpr;
    canvasRef.current.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);
    
    // Set canvas styling
    canvasRef.current.style.width = `${rect.width}px`;
    canvasRef.current.style.height = `${rect.height}px`;

    // Draw chart based on type
    if (type === 'bar') {
      drawBarChart(ctx, data, rect.width, rect.height);
    } else if (type === 'line') {
      drawLineChart(ctx, data, rect.width, rect.height);
    } else if (type === 'pie') {
      drawPieChart(ctx, data, rect.width, rect.height);
    }
  }, [data, type]);

  const drawBarChart = (
    ctx: CanvasRenderingContext2D, 
    data: ChartProps['data'], 
    width: number, 
    height: number
  ) => {
    const { labels, values } = data;
    const barWidth = (width - 60) / labels.length - 10;
    const maxValue = Math.max(...values) * 1.1;
    
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
    values.forEach((value, index) => {
      const x = 50 + index * (barWidth + 10);
      const barHeight = ((height - 60) * value) / maxValue;
      const y = height - 40 - barHeight;
      
      // Draw bar
      const color = data.colors?.[index] || `hsl(${index * 36}, 70%, 60%)`;
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

  const drawLineChart = (
    ctx: CanvasRenderingContext2D, 
    data: ChartProps['data'], 
    width: number, 
    height: number
  ) => {
    const { labels, values } = data;
    const maxValue = Math.max(...values) * 1.1;
    const pointSpacing = (width - 60) / (labels.length - 1);
    
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
    for (let i = 0; i < 5; i++) {
      const y = 20 + i * (height - 60) / 4;
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.beginPath();
      ctx.moveTo(40, y);
      ctx.lineTo(width - 20, y);
      ctx.stroke();
      
      // Draw y-axis labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'right';
      const label = Math.round(maxValue * (4 - i) / 4);
      ctx.fillText(label.toString(), 35, y + 3);
    }
    
    // Plot points and line
    const points: [number, number][] = values.map((value, index) => {
      const x = 40 + index * pointSpacing;
      const y = height - 40 - ((height - 60) * value) / maxValue;
      return [x, y];
    });
    
    // Draw line
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point[0], point[1]);
      } else {
        ctx.lineTo(point[0], point[1]);
      }
    });
    
    ctx.stroke();
    
    // Draw area under the line
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    
    points.forEach((point) => {
      ctx.lineTo(point[0], point[1]);
    });
    
    ctx.lineTo(points[points.length - 1][0], height - 40);
    ctx.lineTo(points[0][0], height - 40);
    ctx.closePath();
    
    ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
    ctx.fill();
    
    // Draw points
    points.forEach((point, index) => {
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

  const drawPieChart = (
    ctx: CanvasRenderingContext2D, 
    data: ChartProps['data'], 
    width: number, 
    height: number
  ) => {
    const { labels, values } = data;
    const total = values.reduce((sum, value) => sum + value, 0);
    const radius = Math.min(width, height) / 2 - 40;
    const centerX = width / 2;
    const centerY = height / 2;
    
    let startAngle = 0;
    
    // Draw pie slices
    values.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;
      const color = data.colors?.[index] || `hsl(${index * 36}, 70%, 60%)`;
      
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fill();
      
      // Calculate position for the label
      const middleAngle = startAngle + sliceAngle / 2;
      const labelRadius = radius * 0.7;
      const labelX = centerX + labelRadius * Math.cos(middleAngle);
      const labelY = centerY + labelRadius * Math.sin(middleAngle);
      
      // Draw label
      const percent = Math.round((value / total) * 100);
      if (percent > 5) { // Only draw labels for slices that are large enough
        ctx.fillStyle = 'white';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${percent}%`, labelX, labelY);
      }
      
      startAngle = endAngle;
    });
    
    // Draw legend
    const legendX = width - 120;
    const legendY = 30;
    
    labels.forEach((label, index) => {
      const y = legendY + index * 20;
      const color = data.colors?.[index] || `hsl(${index * 36}, 70%, 60%)`;
      
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

  return (
    <div className={`rounded-lg p-4 ${className}`}>
      <h3 className="text-lg font-medium mb-4 text-slate-300">{title}</h3>
      <canvas 
        ref={canvasRef} 
        className="w-full h-60"
      />
    </div>
  );
} 