const mainDiv = document.getElementById('main-div');

const searchPhone = () => {
    //console.log("button clicked");

    const searchField = document.getElementById('search-field');
    const errorMessege = document.getElementById('error-messege');
    const searchText = searchField.value;
    //console.log(searchText);

    if (searchText == 'iphone' || searchText == 'samsung' || searchText == 'oppo' || searchText == 'huawei') {
        //  console.log('Phone Found');
        mainDiv.innerHTML = '';
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => phoneInfo(data.data))


        searchField.value = '';
        errorMessege.innerHTML = '';

    }

    else {
        errorMessege.innerText = "Sorry, Your Desired Phone Is Not Found"
        searchField.value = '';
        mainDiv.innerHTML = '';
    }

}



const phoneInfo = (phone) => {
   // console.log(phone);
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
            <button onclick="seeDetails('${phoneList.slug}')" class="btn btn-primary">See Details</button>
        </div>
        </div>
        
        `
        mainDiv.appendChild(div);

    })

}

const seeDetails = (id) => {
    //console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
         .then(data => showPhone(data.data))
        
        //{
        //     const allPhone =data.data;
        //     const specificPhone = allPhone.find(phones=> phones.id===id)
        //     console.log(specificPhone);
        //     console.log(allPhone);

        // })
}

 const showPhone =(info) =>{
     //console.log(info);
     document.getElementById('show-details').innerHTML =`
     
     <div class="card" style="width: 18rem;">
             <img src="${info.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${info.name}</h5>
            <p>Brand: ${info.brand}<p>
            <button onclick="showMore()" class="btn btn-primary">Show More</button>
        </div>
        </div>
     
     `

 }
