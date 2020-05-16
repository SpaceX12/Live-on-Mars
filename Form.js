class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("Start!!");
        this.question1 = createElement("h3");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();  
    }

    display(){
        
        this.title.html("Ticket to Mars");
        this.title.position(130,0);
        
        this.input.position(130,160);
        
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            var name = this.input.value();

            playerCount++
            martian.update(name);
            martian.updateCount(playerCount)

            
            this.question1.html("Do you want to live on Mars ? ")
            this.question1.position(130,160);
        })
    }
}