const product = document.getElementById('product');

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(res => res.json())
    .then(data => {
        displayFoods(data.meals)
    })


const displayFoods = (data) => {

    data.forEach(element => {
        console.log(element)
        const div = document.createElement('div');

        product.appendChild(div);

        div.innerHTML = `
            <div class=' text-center border lg:w-96 flex flex-col justify-center items-center p-4 space-y-2'>
                <img class="lg:w-80" src=${element.strMealThumb} />
                <h1 class="font-bold">${element.strMeal
            }</h1>
            </div>
        `

    });

}


document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userSearch = e.target.search.value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearch}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            product.innerHTML = ''
            displayFoods(data.meals)
        })


})

// document.getElementById('search_btn').addEventListener('click', (e) => {
//     e.preventDefault()
//     const search = document.getElementById('search').value


//
//     // fetch(`http://localhost:5000/foods?search=${search}`)
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         console.log(data);
//     //     })
// })
