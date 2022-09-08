module.exports = {
  apps: [
    {
      name: 'react-canvas',
      script: 'server/server.js',
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
