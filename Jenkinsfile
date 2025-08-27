pipeline {
    agent {
        docker {
            image 'cypress/browsers:latest'
            args '--entrypoint='
        }
    }

    stages {
        stage('Installation') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            // Vérifie que le script existe avant de l'exécuter
            script {
                if (fileExists('tools/generate_html_cucumber_report.sh')) {
                    sh 'chmod +x tools/generate_html_cucumber_report.sh'
                    sh 'tools/generate_html_cucumber_report.sh'
                } else {
                    echo " Script generate_html_cucumber_report.sh introuvable, rapport non généré."
                }
            }
            archiveArtifacts artifacts: 'cypress/screenshots/**, reports/**', allowEmptyArchive: true
        }
    }
}