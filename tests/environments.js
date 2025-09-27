// environments.js - Define different environment configurations

// Get environment from command line or default to 'dev'
const ENV = process.env.ENV || 'dev';

// Base URL configurations for different environments
const config = {
  dev: {
    baseURL: 'https://dev.practice.expandtesting.com',
    apiUrl: 'https://dev-api.practice.expandtesting.com',
    userCredentials: {
      username: 'testuser',
      password: 'testpass'
    }
  },
  staging: {
    baseURL: 'https://staging.practice.expandtesting.com',
    apiUrl: 'https://staging-api.practice.expandtesting.com',
    userCredentials: {
      username: 'staginguser',
      password: 'stagingpass'
    }
  },
  prod: {
    baseURL: 'https://practice.expandtesting.com',
    apiUrl: 'https://api.practice.expandtesting.com',
    userCredentials: {
      username: 'produser',
      password: 'prodpass'
    }
  }
};

// Export the config for the current environment
module.exports = config[ENV];