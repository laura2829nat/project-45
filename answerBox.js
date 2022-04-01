class AnswerBox {

    constructor() {
        this.answerBox = createInput ("20+5 = ?" )
        this.answerBox.position (420, 200)
        this.answerBox.style('background', 'white')

        this.button1 = createButton('Submit');
        this.button1.position(475,230);
        this.button1.style('background', 'lightgrey'); 

        
    }

    display(){

       

        this.button1.mousePressed(() => {
            if(system.authenticate(answer1,this.answerBox.value())){
                this.button1.hide();
                this.answerBox.hide();
                coin.visible = true   
                coin.velocityY = -9
                if (coin.y < 200) {
                    coin.y = 200
                }         
                score++;
            }
        });

    }}