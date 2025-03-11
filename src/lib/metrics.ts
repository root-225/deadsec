import { env } from './env';

interface MetricValue {
  value: number;
  timestamp: number;
  labels: Record<string, string>;
}

interface Metric {
  name: string;
  help: string;
  type: 'counter' | 'gauge' | 'histogram';
  values: MetricValue[];
}

class Metrics {
  private static instance: Metrics;
  private metrics: Map<string, Metric>;
  private readonly MAX_VALUES = 1000;

  private constructor() {
    this.metrics = new Map();
    this.initializeDefaultMetrics();
  }

  static getInstance(): Metrics {
    if (!Metrics.instance) {
      Metrics.instance = new Metrics();
    }
    return Metrics.instance;
  }

  private initializeDefaultMetrics() {
    // Authentication metrics
    this.createMetric('auth_login_attempts_total', 'Total number of login attempts', 'counter');
    this.createMetric('auth_login_failures_total', 'Total number of failed login attempts', 'counter');
    this.createMetric('auth_active_sessions', 'Number of active user sessions', 'gauge');

    // Request metrics
    this.createMetric('http_requests_total', 'Total number of HTTP requests', 'counter');
    this.createMetric('http_request_duration_ms', 'HTTP request duration in milliseconds', 'histogram');
    this.createMetric('http_request_size_bytes', 'HTTP request size in bytes', 'histogram');

    // Security metrics
    this.createMetric('security_csrf_failures', 'Number of CSRF validation failures', 'counter');
    this.createMetric('security_rate_limit_hits', 'Number of rate limit threshold hits', 'counter');
    this.createMetric('security_invalid_tokens', 'Number of invalid token attempts', 'counter');
  }

  private createMetric(name: string, help: string, type: Metric['type']) {
    this.metrics.set(name, {
      name,
      help,
      type,
      values: []
    });
  }

  increment(name: string, labels: Record<string, string> = {}) {
    const metric = this.metrics.get(name);
    if (!metric || metric.type !== 'counter') return;

    metric.values.push({
      value: 1,
      timestamp: Date.now(),
      labels
    });

    this.pruneMetricValues(metric);
  }

  gauge(name: string, value: number, labels: Record<string, string> = {}) {
    const metric = this.metrics.get(name);
    if (!metric || metric.type !== 'gauge') return;

    metric.values.push({
      value,
      timestamp: Date.now(),
      labels
    });

    this.pruneMetricValues(metric);
  }

  histogram(name: string, value: number, labels: Record<string, string> = {}) {
    const metric = this.metrics.get(name);
    if (!metric || metric.type !== 'histogram') return;

    metric.values.push({
      value,
      timestamp: Date.now(),
      labels
    });

    this.pruneMetricValues(metric);
  }

  private pruneMetricValues(metric: Metric) {
    if (metric.values.length > this.MAX_VALUES) {
      metric.values = metric.values.slice(-this.MAX_VALUES);
    }
  }

  getMetrics(): Record<string, Metric> {
    return Object.fromEntries(this.metrics);
  }

  getMetric(name: string): Metric | undefined {
    return this.metrics.get(name);
  }

  // Export metrics in Prometheus format
  exportPrometheusMetrics(): string {
    const lines: string[] = [];

    for (const [name, metric] of this.metrics) {
      lines.push(`# HELP ${name} ${metric.help}`);
      lines.push(`# TYPE ${name} ${metric.type}`);

      for (const value of metric.values) {
        const labels = Object.entries(value.labels)
          .map(([k, v]) => `${k}="${v}"`)
          .join(',');

        lines.push(`${name}${labels ? `{${labels}}` : ''} ${value.value} ${value.timestamp}`);
      }
    }

    return lines.join('\n');
  }
}

export const metrics = Metrics.getInstance(); 