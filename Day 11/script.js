const button = document.querySelector('button')
button.addEventListener('click' , e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ',
         e.target.textContent
    )
})

const clickMe = () => {
    alert('We can attach event on HTML element')
}

const button1 = document.querySelector('.button1')
button1.addEventListener('dbclick', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ',
         e.target.textContent
    )
})

const button2 = document.querySelector('#button2')
button1.addEventListener('mouseenter', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ', e.target.textContent
    )
})