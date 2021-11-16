const form=document.querySelector(".login-form");

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event){

    event.preventDefault();

    const elemForm=event.currentTarget.elements;

    const mail=elemForm.email.value;

    const password=elemForm.password.value;

        if (mail === "" || password ===""){
        alert("Все поля должны быть заполнены")
        }

    const dataForm ={
        mail,
        password
    }

    console.log(dataForm);

    event.currentTarget.reset();

}