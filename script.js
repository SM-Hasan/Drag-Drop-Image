const dragArea = document.getElementById('dragArea');
const dragTitle = document.getElementById('dragTitle');
const dragBtn = document.getElementById('dragBtn');
const fileOpen = document.getElementById('fileOpen');

let myFile;


dragBtn.addEventListener('click',function(){
    fileOpen.click();
});

fileOpen.addEventListener('change',function(){
    myFile = this.files[0];
    dragArea.classList.add('active');
    showImage();

});

dragArea.addEventListener('dragover',function(event){
    event.preventDefault();
    dragArea.classList.add('active');
    dragTitle.textContent='Replace to Update Files'
})
dragArea.addEventListener('dragleave',function(event){
    event.preventDefault();
    dragArea.classList.remove('active');
    dragTitle.textContent = 'Drag & Drop'
})

dragArea.addEventListener('drop',function(event){
    event.preventDefault();
    myFile = event.dataTransfer.files[0];
    showImage();
})

function showImage(){
    let fileType = myFile.type;
    let validEx = ['image/jpg','image/jpeg','image/png'];
    if(validEx.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload=()=>{
            let imgURL = fileReader.result
            let img = `<img src="${imgURL}" alt="">`;
            dragArea.innerHTML = img
        }
        fileReader.readAsDataURL(myFile)  
    }else{
        alert('This File is not Valid');
        dragArea.classList.remove('active');
        dragTitle.textContent = 'Drag & Drop'

    }
}

