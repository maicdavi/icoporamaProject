pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        disableConcurrentBuilds()
        timestamps()
    }

    environment {
        FRONTEND_DIR = 'frontend'
        WEB_IMAGE = "icoporama-web:${BUILD_NUMBER}"
    }

    stages {
        stage('Environment') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'docker --version'
                bat 'docker compose version'
            }
        }

        stage('Install') {
            steps {
                dir(env.FRONTEND_DIR) {
                    bat 'npm ci'
                }
            }
        }

        stage('Build') {
            steps {
                dir(env.FRONTEND_DIR) {
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                dir(env.FRONTEND_DIR) {
                    bat 'npm test -- --watch=false --browsers=ChromeHeadless'
                }
            }
        }

        stage('Docker') {
            steps {
                bat 'docker info'
                bat 'docker compose config'
                bat 'docker build --tag %WEB_IMAGE% frontend'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'frontend/dist/**', fingerprint: true
        }
        always {
            deleteDir()
        }
    }
}
