

const searchPhone = () =>{
    //console.log("button clicked");

    const searchField = document.getElementById('search-field');
    const errorMessege = document.getElementById('error-messege');
   const searchText = searchField.value;
   console.log(searchText);

 if(searchText=='iphone' || searchText=='samsung'|| searchText=='oppo' || searchText=='huawei' ){
    //  console.log('Phone Found');

     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then (data=>phoneInfo(data))


    searchField.value='';
    
 }

 else{
    errorMessege.innerText ="Sorry, Your Desired Phone Is Not Found"
    searchField.value='';
 }

}

const phoneInfo = (phone) =>{
    console.log(phone);

}
