const progressBar = document.querySelector('progress')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = document.getElementById('form');
    const formData = new FormData(form)
    const postFile = new XMLHttpRequest()
    postFile.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    postFile.upload.onprogress = function(event){
        progressBar.value = Number(event.total) / Number(event.loaded);
    }
    postFile.send(formData)
})
