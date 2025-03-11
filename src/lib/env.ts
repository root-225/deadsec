const requiredEnvVars = [
  'JWT_SECRET',
  'NODE_ENV'
] as const;

type EnvVar = typeof requiredEnvVars[number];

function getEnvVar(key: EnvVar): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  JWT_SECRET: getEnvVar('JWT_SECRET'),
  NODE_ENV: getEnvVar('NODE_ENV'),
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
} as const; 