
 


document.addEventListener('DOMContentLoaded',()=>{
  fetch('  http://localhost:3000/mainData')
  .then((resp)=>resp.json())

  .then((data)=>{
    // console.log(data)
    const imgData=[]
    data.forEach(element => {
      // console.log(element)
      imgData.push(element)
    }
    
    
    ); 
    // rendering images to the DOM
    const img=document.getElementsByTagName('img')
    // console.log(img[2])

    img[2].src=imgData[0].image
    img[3].src=imgData[1].image
    img[4].src=imgData[3].image
    img[5].src=imgData[4].image
    img[6].src=imgData[5].image
    img[7].src=imgData[6].image
    img[8].src=imgData[7].image
    img[9].src=imgData[8].image
    img[10].src=imgData[9].image
    img[11].src=imgData[10].image
    img[12].src=imgData[11].image
    img[13].src=imgData[12].image
    img[14].src=imgData[13].image
    img[15].src=imgData[14].image
    img[16].src=imgData[15].image
    img[17].src=imgData[16].image
    img[18].src=imgData[17].image
    img[19].src=imgData[18].image
    img[20].src=imgData[19].image
    img[21].src=imgData[20].image
    // img[22].src=imgData[21].image
    // img[23].src=imgData[22].image
    // img[24].src=imgData[23].image

    // rendering titles to the DOM
    const h4=document.getElementsByTagName("h4")
   
    h4[0].innerHTML=imgData[0].title
    h4[1].innerHTML=imgData[1].title
    h4[2].innerHTML=imgData[3].title
    h4[3].innerHTML=imgData[4].title
    h4[4].innerHTML=imgData[5].title
    h4[5].innerHTML=imgData[6].title
    h4[6].innerHTML=imgData[7].title
    h4[7].innerHTML=imgData[8].title
    h4[8].innerHTML=imgData[9].title
    h4[9].innerHTML=imgData[10].title
    h4[10].innerHTML=imgData[11].title
    h4[11].innerHTML=imgData[12].title
    h4[12].innerHTML=imgData[13].title
    h4[13].innerHTML=imgData[14].title
    h4[14].innerHTML=imgData[15].title
    h4[15].innerHTML=imgData[16].title
    h4[16].innerHTML=imgData[17].title
    h4[17].innerHTML=imgData[18].title
    h4[18].innerHTML=imgData[19].title
    h4[19].innerHTML=imgData[20].title
    // h4[20].innerHTML=imgData[21].title
    // let itemsArray=[]
    // for( items of h4){
    //   console.log(items)
    const p=document.getElementsByTagName('p')

    // rendering prices to the DOM

    console.log(imgData[0].price)
    
    p[1].innerHTML=imgData[0].price
    p[1].innerHTML=imgData[1].price
    p[2].innerHTML=imgData[3].price
    p[3].innerHTML=imgData[4].price
    p[4].innerHTML=imgData[5].price
    p[5].innerHTML=imgData[6].price
    p[6].innerHTML=imgData[7].price
    p[7].innerHTML=imgData[8].price
    p[8].innerHTML=imgData[9].price
    p[9].innerHTML=imgData[10].price
    p[10].innerHTML=imgData[11].price
    p[11].innerHTML=imgData[12].price
    p[12].innerHTML=imgData[13].price
    p[13].innerHTML=imgData[14].price
    p[14].innerHTML=imgData[15].price
    p[15].innerHTML=imgData[16].price
    p[16].innerHTML=imgData[17].price
    p[17].innerHTML=imgData[18].price
    p[18].innerHTML=imgData[19].price
    p[19].innerHTML=imgData[20].price
    p[20].innerHTML=imgData[21].price

    
    // }
    console.log(h4[3].innerHTML)
    console.log(imgData[1].title)
    
    // console.log(itemsArray)

    let itemArray=[]
    for( item of imgData){
      
    }



    
      
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
      anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView
        ({behavior:'smooth'});
      });

    });



      const form=document.querySelector("#comment-form")
      form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const inputName=document.querySelector(".name-input")
        const inputmsg =document.querySelector("#comment")
        const button=document.querySelector(".comment-btn")
        const ul=document.querySelector("#comments-list")
        button.addEventListener('click',()=>{
          const coverli=document.createElement('li')
          coverli.append(`@${inputName.value}  "${ inputmsg.value}"`)

          ul.appendChild(coverli)
          e.target.reset()
        })
      })



  })
   
    
 
   
})




