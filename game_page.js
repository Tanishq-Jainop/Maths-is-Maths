player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

player1_score=0;
player2_score=0

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1score").innerHTML=player1_score+":";
document.getElementById("player2score").innerHTML=player2_score+":";

document.getElementById("player_question").innerHTML="Question Turn :"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn :"+player2_name;

function send(){
    Get_Word=document.getElementById("word").value;

    charecterat1=word.charAt(1)
    length2=Math.floor(word.length/2);
    charecterat2=word.charAt(length2);
    minus=word.length-1;
    charecterat3=word.charAt(minus);

    new1=word.replace(charecterat1,"_");
    new2=new1.replace(charecterat2,"_");
    new3=new2.replace(charecterat3,"_");
    console.log(new3);
    console.log(new2);
    console.log(new1);
    question="<h4 id='word-display'>Question "+new3+"</h4>";

    inputa="<br> answer: <input type='text' id='input_check_box'> "
    
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
    row=question+inputa+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerHTML="";
} 