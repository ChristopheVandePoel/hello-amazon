ps -ef | grep '[0-9]\{2\} node app.js' | awk '{print $2}'
