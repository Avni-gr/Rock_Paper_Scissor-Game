

function generateRandom(){
  let randomNum=Math.random()*3;
  if(randomNum>0 && randomNum<=1){
    return 'Rock';
  }else if(randomNum>1 && randomNum<=2){
    return 'Paper';
  }else{
    return 'Scissor';
  }
}


let score={
  win:0,
  lost:0,
  tie:0,

}
score.displayScore= function(){
  document.querySelector('#final_score').innerHTML=`
  Your Score : ${score.win} | 
  Computer Score : ${score.lost} | 
  It's tie : ${score.tie}`
}


let scorestr=localStorage.getItem('Score');
if(scorestr!== undefined){
  let jsonstr=JSON.parse(scorestr);
  document.querySelector('#final_score').innerHTML=`
  Your Score : ${jsonstr.win} | 
  Computer Score : ${jsonstr.lost} | 
  It's tie : ${jsonstr.tie}`
}

function showResult(userMove,computerMove){
  if(userMove==='Rock'){
    if(computerMove==='Rock'){
      score.tie++;
      return 'its a tie';
    }else if(computerMove==='Paper'){
      
      score.lost++;
      return 'Computer won';
    }else{
      score.win++;
      return 'User won';
    }}

  else if(userMove==='Paper'){
    if(computerMove==='Paper'){
      score.tie++;
      return 'its a tie';
    }else if(computerMove==='Scissor'){
      score.lost++;
      return 'computer won';
    }else{
      score.win++;
      return 'User won';
    }}

    else{
      if(computerMove==='Scissor'){
        score.tie++;
        return 'its a tie';
      }else if(computerMove==='Rock'){
        score.lost++;
        return 'Computer won';
      }else{
        score.win++;
        return 'User won';
      }
    }
}

function alertShow(userMove,computerMove,result){
  localStorage.setItem('Score',JSON.stringify(score));
  score.displayScore();
  

  alert(`user: ${userMove}, Computer: ${computerMove} 
So ${result}`)
}

function ResetButton(){
  localStorage.clear();
  score.displayScore();

}


