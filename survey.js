class Survey{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("Do You Want To Live On Mars?");
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
            player.update(name);
            player.updateCount(playerCount)

            var greeting = createElement("h3")
            greeting.html("hello "+name)
            greeting.position(130,160);
        })
    }
}