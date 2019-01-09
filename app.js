const listCafes = document.querySelector('#cafe-list')

const rendeCafe = (doc) => {
  let li = document.createElement('li')
  let name = document.createElement('span')
  let city = document.createElement('span')

  li.setAttribute('data-id', doc.id)
  name.textContent = doc.data().name
  city.textContent = doc.data().city

  li.appendChild(name)
  li.appendChild(city)

  listCafes.appendChild(li)
}

const cafeList = async () => {
  try {
    const list = await db.collection('cafes').get()
    list.docs.forEach(doc => {
      rendeCafe(doc)
    })
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

// call a cafes list
cafeList()