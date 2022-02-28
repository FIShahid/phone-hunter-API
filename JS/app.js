

const searchPhone = () => {
    //console.log("button clicked");

    const searchField = document.getElementById('search-field');
    const errorMessege = document.getElementById('error-messege');
    const searchText = searchField.value;
    console.log(searchText);

    if (searchText == 'iphone' || searchText == 'samsung' || searchText == 'oppo' || searchText == 'huawei') {
        //  console.log('Phone Found');

        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => phoneInfo(data.data))


        searchField.value = '';

    }

    else {
        errorMessege.innerText = "Sorry, Your Desired Phone Is Not Found"
        searchField.value = '';
    }

}

const mainDiv = document.getElementById('main-div');

const phoneInfo = (phone) => {
    console.log(phone);
    phone.forEach(phoneList => {
        //console.log(phoneList.image);
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
             <img src="${phoneList.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phoneList.phone_name}</h5>
            <p>Brand: ${phoneList.brand}<p>
            <button href="#" class="btn btn-primary">See Details</button>
        </div>
        </div>
        
        `
        mainDiv.appendChild(div);

    })

}
