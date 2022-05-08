const submitButton = document.querySelector(".signup-btn")
const select1 = document.querySelector(".elect")
const select2 = document.querySelector(".lang")
const select3 = document.querySelector(".audio")

submitButton.addEventListener("click" , () => {
    // console.log(select1.options[select1.selectedIndex])
    console.log(select1.value)

    
    if(select1.value==='choose'){
        return alert('kindly fill all details')
    }
    if(select2.value==='choose'){
        return alert('kindly fill all details')
    }
    if(select3.value==='choose'){
        return alert('kindly fill all details')
    }

    window.location.href='/DSRV/dsrv.html'
    
})