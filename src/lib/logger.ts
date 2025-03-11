import { env } from './env';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: any;
  userId?: string;
  ip?: string;
  path?: string;
  method?: string;
}

class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private readonly MAX_LOGS = 1000;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatLog(level: LogLevel, message: string, data?: any): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data: this.sanitizeData(data)
    };
  }

  private sanitizeData(data: any): any {
    if (!data) return undefined;

    // Deep clone the data
    const sanitized = JSON.parse(JSON.stringify(data));

    // Remove sensitive fields
    const sensitiveFields = ['password', 'token', 'secret', 'jwt', 'cookie'];
    const sanitizeObject = (obj: any) => {
      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          sanitizeObject(obj[key]);
        } else if (sensitiveFields.some(field => key.toLowerCase().includes(field))) {
          obj[key] = '[REDACTED]';
        }
      }
    };

    sanitizeObject(sanitized);
    return sanitized;
  }

  private addLog(entry: LogEntry) {
    this.logs.push(entry);
    if (this.logs.length > this.MAX_LOGS) {
      this.logs.shift();
    }

    // In production, you would send this to a logging service
    if (env.IS_PRODUCTION) {
      // TODO: Send to logging service (e.g., CloudWatch, Datadog, etc.)
      console.log(JSON.stringify(entry));
    } else {
      console.log(`[${entry.level.toUpperCase()}] ${entry.message}`, entry.data || '');
    }
  }

  debug(message: string, data?: any) {
    if (!env.IS_PRODUCTION) {
      this.addLog(this.formatLog('debug', message, data));
    }
  }

  info(message: string, data?: any) {
    this.addLog(this.formatLog('info', message, data));
  }

  warn(message: string, data?: any) {
    this.addLog(this.formatLog('warn', message, data));
  }

  error(message: string, data?: any) {
    this.addLog(this.formatLog('error', message, data));
  }

  securityEvent(message: string, data?: any) {
    const entry = this.formatLog('warn', `[SECURITY] ${message}`, data);
    entry.timestamp = new Date().toISOString();
    this.addLog(entry);
  }

  getLogs(level?: LogLevel): LogEntry[] {
    return level 
      ? this.logs.filter(log => log.level === level)
      : [...this.logs];
  }

  clearLogs() {
    this.logs = [];
  }
}

export const logger = Logger.getInstance(); 