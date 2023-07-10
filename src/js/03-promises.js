const refs ={
  form: document.querySelector('.form'),
  delay: document.querySelector('[name = "delay"]'),
  step: document.querySelector('[name = "step"]'),
  amount: document.querySelector('[name ="amount"]'),
  button: document.querySelector('button')

}
// console.log(refs);
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay})
    // Fulfill
  } else {
    reject({position,delay})
    // Reject
  }

    }, delay)
  })
  return promise
  
}
refs.button.addEventListener('click', e =>{
  e.preventDefault()
  let delay = Number(refs.delay.value);
  let step = Number(refs.step.value)

  for (let i =0; i < refs.amount.value; i +=1) {
    createPromise(1 + i, delay+ i * step).then(({position, delay}) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({position, delay})=>{
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    } )
  }
  refs.form.reset()
})
