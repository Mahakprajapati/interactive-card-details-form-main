const button=document.querySelector('.button');
const inputfields=document.querySelectorAll('input');
const textContainer=document.querySelector('.text-container');
const completedContainer=document.querySelector('.completed-container');
let nameFull=document.querySelector('#namefull');
let num=document.querySelector('#number');
let MM=document.querySelector('#MM');
let YY=document.querySelector('#YY');
let CVC=document.querySelector('#CVC');


let Name;
let NumBer;
let mm;
let yy;
let cvc;

const formateNumber=(number)=>number.split("").reduce((seed, next, index)=>{
   if(index !==0 && !(index%4)) seed += " ";
   // console.log(number);
   return seed + next;
}, "");

let filledInputfields=false;
inputfields.forEach((inputfield)=>{
   inputfield.addEventListener('input',()=>{

      if(inputfield.id=='number'){

         inputfield.value=formateNumber(inputfield.value.replaceAll(" ",""));

      }

      filledInputfields=[...inputfields].every((input)=>{
         return input.value;
      });
      
      // console.log(inputfield.id);
      
       if(inputfield.id=='namefull'){
         Name=inputfield.value;
       }else if(inputfield.id=='number'){
           NumBer=inputfield.value;
      }else if(inputfield.id=='MM'){
         mm=inputfield.value;
      }else if(inputfield.id=='YY'){
         yy=inputfield.value;
      }else{
         cvc=inputfield.value;
      }
   })


   inputfield.addEventListener('focus',()=>{
     textContainer.classList.remove('error');
   })
})

button.addEventListener('click',()=>{
   if(filledInputfields){
      console.log(filledInputfields);
      textContainer.style.display='none';
      completedContainer.style.display='block';
      
      nameFull.innerHTML=Name.toUpperCase().trim();
      num.innerHTML=NumBer;
      MM.innerHTML=mm;
      YY.innerHTML=yy;
      CVC.innerHTML=cvc;

   }else{
     textContainer.classList.add('error');
   }
})


