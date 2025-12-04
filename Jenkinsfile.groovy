pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }
        stage('Checkout') {
            steps {
                // Use 'git' step explicitly if not using SCM pipe
                git url: 'https://github.com/sebas-code28/Playwright-Framework.git/', 
                branch: 'master',
                credentialsId: 'SebaGithub'
            }
        }
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }
        stage('Run tests') {
            steps {
                bat 'npm run test'
            }
        }
        stage('Publish Playwright HTML report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}