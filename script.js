const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
    for(let i = 1; i <= answer; i++)
        {
            if(i % 3 === 0 && i % 5 === 0){
                createPara("FizzBuzz");
            }
            else if(i % 3 === 0)
            {
                createPara("Fizz");
            }
            else if(i % 5 === 0)
            {
                createPara("Buzz");
            }
            else
            {
                createPara(i);
            }
        }
});

function createPara(input)
{
    const para = document.createElement('p');
    para.innerHTML = `${input}`;
    document.body.appendChild(para);
}
