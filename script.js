/** LINKS VERIFICATION */
const HeaderLinks = document.querySelectorAll('.NavigationList a');
HeaderLinks.forEach(link => {
  if(document.URL.includes(link.getAttribute('href')))
  link.classList.add('active')
})

/** IMG CARROSSEL */
const BikesImgs = document.querySelectorAll('.Bikes__Images div');
if(BikesImgs.length)
BikesImgs.forEach(div => {
  div.addEventListener('click', (e)=> {
    BikesImgs.forEach(img => img.classList.remove('MainImg'))
    e.currentTarget.classList.add('MainImg');
  })
})


/** FAQ */
const Perguntas = document.querySelectorAll('.Questions dt');

if(Perguntas.length)
Perguntas.forEach(pergunta => {
  pergunta.addEventListener('click', (e)=>{
    e.target.classList.toggle('active')
  })
})

/** AUTO CHECKUP */
const BikesLink = document.querySelector('.Bikes__Texts .BtnContainer a');
if(BikesLink)BikesLink.addEventListener('click', ()=>{
  const Checks = document.querySelector('.Bike__choose__single input');

  console.log(document.documentElement)
})