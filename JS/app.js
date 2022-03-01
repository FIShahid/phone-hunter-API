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
        document.getElementById('show-details').innerHTML='';

    }

    else {
        errorMessege.innerText = "Sorry, Your Desired Phone Is Not Found"
        searchField.value = '';
        mainDiv.innerHTML = '';
        
    }

}



const phoneInfo = (phone) => {
   // console.log(phone);
   
   const phoneList = phone.slice(0,20);
    phoneList.forEach(phones => {
        //console.log(phoneList);
        const div = document.createElement('div');
        
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
             <img src="${phones.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phones.phone_name}</h5>
            <p>Brand: ${phones.brand}<p>
            <button onclick="seeDetails('${phones.slug}')" class="btn btn-primary">See Details</button>
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
         
}

 const showPhone =(info) =>{
     //console.log(info);
   
     mainDiv.innerHTML ='';
    // phone.forEach(phoneList => {
       
     document.getElementById('show-details').innerHTML =`
     
     <div class="card" style="w-50;">
             <img  src="${info.image}" class="card-img-top w-25" alt="...">
        <div class="card-body">
        <h5 class="card-title">${info.name}</h5>
        <p>Brand: ${info.brand}<p>

            <h6 class="fw-bold">Main Features:</h6>
            <p>Release Date: ${info.releaseDate?info.releaseDate: 'Coming Soon...'}</p>
            <hr>
            <p>Storage:  ${info.mainFeatures.storage}</p>
            <hr>           
            <p>Display:  ${info.mainFeatures.displaySize}</p> 
            <hr>          
            <p>Chip:  ${info.mainFeatures.chipSet}</p>   
            <hr>        
            <p>Memory:  ${info.mainFeatures.memory}</p>           
            
            
        </div>
        </div>
     
     `
     

        
 }
