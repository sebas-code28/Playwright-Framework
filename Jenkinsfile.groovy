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
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm run test'
            }
        }
        stage('Publish Playwright Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**'
                publishHTML(target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }
}