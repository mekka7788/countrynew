const textField = document.querySelector("#search");
console.log(textField)
const button = document.querySelector(`#submit`)

const weather = () => {
    const div = document.querySelector('div')
    const h2 = document.querySelector('h2')

    const newImg = document.createElement(`img`)
    const newTitle = document.createElement(`h1`)
  fetch('https://api.weatherapi.com/v1/current.json?key=cc63056848c34dd1a60152444232710&q=' + textField.value)
      .then((response)=>response.json())
      .then((data) => {
          // const { temp_c, condition, humidity} = data.current;
          // console.log(data.location)
          h2.innerHTML = `Название города ${data.location?.name}, страна: ${data.location?.country}`
          newImg.src = data.current?.condition?.icon;
          newTitle.innerText = data.current?.condition.text;
          div.appendChild(newTitle)
          div.appendChild(newImg)
      })
}

weather('Bishkek')

button.addEventListener(`click`, () => {
    weather()
})