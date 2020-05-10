class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("Ticket to Mars");
        title.position(130,0);

        var input = createInput("Name")
        input.position(130,160);

        var button = createButton("Start!!")
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount++
            martian.update(name);
            martian.updateCount(playerCount)

            var question1 = createElement("h3")
            question1.html("Do you want to live on Mars ? ")
            question1.position(130,160);
        })
    }
}