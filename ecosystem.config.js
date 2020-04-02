module.exports = {
  apps: [
    {
      name: 'weather-api',
      script: './src/index.js',
      instances: 'max',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};