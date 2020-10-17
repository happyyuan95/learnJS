pipeline {
    agent any 
    stages {
        stage('1:git pull code') {
            steps {
                echo "pull the newest code"
                git 'https://github.com/happyyuan95/learnJS.git' 
            }
        }
        stage('2:build the project'){
            steps {
                echo "build the project"
                echo "Running ${env.BUILD_NUMBER} on ${env.JOB_NAME}"
            }
        }
    }
}