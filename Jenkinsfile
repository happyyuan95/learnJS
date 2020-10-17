pipeline {
    agent any 
    stages {
        stage('1:git pull code') {
            steps {
                echo "从git拉取最新代码"
                git 'https://github.com/happyyuan95/learnJS.git' 
            }
        }
        stage('2:build the project'){
            steps {
                echo "build the project"
            }
        }
    }
}