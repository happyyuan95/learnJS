pipeline {
    agent any 
    environment {
        ENV_ADD = "environment params"
    }
    stages {
        stage('1:git pull code') {
            steps {
                environment {
                    PULL_CODE = "pullcode"
                }
                echo "pull the newest code with env only in this step + ${PULL_CODE}"
                git 'https://github.com/happyyuan95/learnJS.git' 
            }
        }
        stage('2:build the project'){
            steps {
                echo "build the project"
                echo "Running ${env.BUILD_NUMBER} on ${env.JOB_NAME}"
                echo "i define a environment in all stage + ${ENV_ADD}"
            }
        }
    }
}