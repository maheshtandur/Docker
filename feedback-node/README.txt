Commands:
    docker build -t mtandur/feedback-node .
    docker run --rm -p 3000:80 -d --name feedback-app mtandur/feedback-node:latest
        -d -- to start container in detach mode
    
    open URL with http://localhost:3000

    To see feedback file
        open URL with http://localhost:3000/feedback/<title.txt>
    
    Command with Volume patameter:
        docker run --rm -p 3000:80 -d --name feedback-aap -v feedback:/app/feedback mtandur/feedback:vol 
            -v feedback:/app/feedback --- mapping volume to store fils or dir

        To run command using volume to map file or dir
            docker run --rm -d -p 3000:80 --name feedback-app \
            -v feedback:/app/feedback \
            -v $(pwd):/app \
            -v /app/node_modules mtandur/feedback:vol