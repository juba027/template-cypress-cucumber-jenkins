pipeline{
    agent{
        docker{
            image 'cypress/browser:latest'
            args '--entrypoint='
        }
        stages{
            stage("installation"){
                steps{
                    sh 'npm ci'

                }
            }
            stage ("run test"){
                steps{
                    sh 'npx cypress run'
                }
            }
        }
        post{
            always {
                sh 'toold/generate_html_cucumber_report.sh'

            }
        }
    }
}