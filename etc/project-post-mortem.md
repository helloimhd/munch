## Project Post Mortem
Post mortems are important to understand about what happened in a project and actively think about what you learned.

Post-mortems are meant to be a blame-less space open to objective conversation about what went well and what could be improved.

Even in the examples below, where tens of millions of dollars could be lost, the best approach is to think through the series of events that led to the outcome.

Large mistakes are almost never the fault of the developer, but of the sytems and processes in place to prevent errors and problems.

[https://github.com/danluu/post-mortems](https://github.com/danluu/post-mortems)
https://blog.codinghorror.com/the-project-postmortem/



### What to Bring
Please answer the following questions. Take at least 30 minutes to prepare.

#### Approach and Process

1. What in my process and approach to this project would I do differently next time?
			Writing down what I think of so I won’t forget about any ideas or code structure that I had in mind. Writing comments as I write my codes instead of doing it later. 

1. What in my process and approach to this project went well that I would repeat next time?
		Listen to suggestions and is open for ideas from others. Sometimes others can think of something that you didnt manage to think about. 

--



#### Code and Code Design

1. What in my code and program design in the project would I do differently next time?
		Try not to hard code first instead of hard code and then change it later. I think better when its thinking how to not hard code and implement it compared to hard code and then have to think how to change it. 


1. What in my code and program design in the project went well? Is there anything I would do the same next time?
		Implementing functions whenever I feel like I have to. 

  For each, please include code examples.
  1. Code snippet up to 20 lines.
  		      // collect one point for each fruit
            if (isCollapsed(newFruit, bar, fruitContent) === "fruit") {
                closeMouth()
                playCorrectAudio();
                score += 1;
                scoreBoard.textContent = `Score: ${score}`;


            //  minus one live if collect tool
            } else if (isCollapsed(newFruit, bar, fruitContent) === "bad") {
                if (lives !== 0){
                    closeMouth()
                    playWekAudio()
                    .......

                    // game over when hit bomb 
            } else if (isCollapsed(newFruit, bar, fruitContent) === "bomb") {
                closeMouth()
                playBombAudio()
                gameOver();

                 //  deduct lives if miss fruit
                //  check if item hit the gamecontainer
            } else if (gameContainerNFruit(newFruit, gameContainer) === "yes") {
                if (fruitContent !== "🔪" && fruitContent !== "🔨" && fruitContent !== "✂️" && fruitContent !== "💣") {
                .....
                .....
                .....

  2. Code design documents or architecture drawings / diagrams.
  		game-condition.jpg






#### WDI Unit 1 Post Mortem
1. What habits did I use during this unit that helped me?
		Comment before I start coding so that I know what I am doing. 

2. What habits did I have during this unit that I can improve on?
		Writing down the structure of the codes. It really helps. Even if I cant think of anything, I can start thinking about what I have to do first whenever I pen it down and then it will flow smoothly. 


3. How is the overall level of the course during this unit? (instruction, course materials, etc.)
		3/5?