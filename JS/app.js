const mainDiv = document.getElementById('main-div');

const searchPhone = () => {
    //console.log("button clicked");
    // Get Input Value
    const searchField = document.getElementById('search-field');
    const errorMessege = document.getElementById('error-messege');
    const searchText = searchField.value;
    //console.log(searchText);
    //Error Handling
    if (searchText == 'iphone' || searchText == 'samsung' || searchText == 'oppo' || searchText == 'huawei') {
        //  console.log('Phone Found');
        mainDiv.innerHTML = '';
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => phoneInfo(data.data))

        //clear text content
        searchField.value = '';
        errorMessege.innerHTML = '';
        document.getElementById('show-details').innerHTML = '';

    }

    else {
        errorMessege.innerText = "Sorry, Your Desired Phone Is Not Found"
        searchField.value = '';
        mainDiv.innerHTML = '';
        document.getElementById('show-details').innerHTML = '';

    }

}



const phoneInfo = (phone) => {
    // console.log(phone);

    const phoneList = phone.slice(0, 20);
    phoneList.forEach(phones => {
        //console.log(phoneList);
        // showing Search Result
        const div = document.createElement('div');

        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card shadow p-3 mb-5 bg-body rounded " style="width:300px;">
             <img  src="${phones.image}" class="card-img-top" style="width:200px" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phones.phone_name}</h5>
            <h6 class="">Brand: ${phones.brand}<h6>
            <button onclick="seeDetails('${phones.slug}')" class="btn btn-info text-dark rounded-pill">See Details</button>
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

const showPhone = (info) => {
    //console.log(info);

    mainDiv.innerHTML = '';
    // Single Card Details

    document.getElementById('show-details').innerHTML = `
     
     <div class="card shadow p-3 mb-5 bg-body rounded d-flex justify-content-center" style="w-50;">
             <img  src="${info.image}" class="card-img-top" alt="..."style="width:200px">
        <div class="card-body">
        <h4>${info.brand}<h4>
        <h5 class="card-title">${info.name}</h5>

            <h6 class="fw-bold">Main Features:</h6>
            <br>
            <p><span class="fw-bold">Launch:  </span> ${info?.releaseDate ? info.releaseDate : 'Coming Soon...'}</p>
            <hr>
            <p><span class="fw-bold">Storage: </span>  ${info?.mainFeatures?.storage ? info.mainFeatures.storage : 'Data Not Available'}</p>
            <hr>           
            <p><span class="fw-bold">Display: </span>  ${info?.mainFeatures?.displaySize ? info.mainFeatures.displaySize : 'Data Not Available'}</p> 
            <hr>          
            <p><span class="fw-bold">ChipSet:  </span>  ${info?.mainFeatures?.chipSet ? info.mainFeatures.chipSet : 'Data Not Available'}</p>   
            <hr>        
            <p><span class="fw-bold">Memory:  </span>${info?.mainFeatures?.memory ? info.mainFeatures.memory : 'Data Not Available'}</p> 
            <hr>          
            <p><span class="fw-bold">Sensors:</span>  ${info?.mainFeatures?.sensors ? info.mainFeatures.sensors : 'Data Not Available'}</p>   
            <hr> 
        
           <div class="other">
           <h6><span class="fw-bold">Others:</span></h6> 
           <br>         
           <p><span class="fw-bold">WLAN:  </span>  ${info?.others?.WLAN ? info.others.WLAN : 'Yes'}</p>            
           <p><span class="fw-bold">Bluetooth:  </span> ${info?.others?.Bluetooth ? info.others.Bluetooth : 'Yes'}</p>            
           <p><span class="fw-bold">GPS:  </span> ${info?.others?.GPS ? info.others.GPS : 'Yes'}</p>            
           <p><span class="fw-bold">NFC:  </span>  ${info?.others?.NFC ? info.others.NFC : 'Yes'}</p>            
           <p><span class="fw-bold">Radio  :</span>${info?.others?.Radio ? info.others.Radio : 'Yes'}</p>            
           <p><span class="fw-bold">USB:  </span>${info?.others?.USB ? info.others.USB : 'Yes'}</p>                     
          
           
           </div>
        </div>
        </div>
     
     `



}
