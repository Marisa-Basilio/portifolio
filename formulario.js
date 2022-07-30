


const button = document.getElementById('button_goup_btn')


button.addEventListener('click',Event) => {
    Event.preventDefault()
    const nome = document.getElementById('nome')
    const sobrenome = document.getElementById('sobrenome')
    const email = document.getElementById('nome') 
    const telefone = document.getElementById('telefone')
    const textearea = document.getElementById('textearea')

    if (nome.value == '') {
        nome.classList.add("form_input_error")   
    }

    if (sobrenome.value == '') {
        sobrenome.classList.add("form_input_error")
        
    }
    if (email.value == '') {
        email.classList.add("form_input_error")
        
    }
    if (telefone.value == '') {
        telefone.classList.add("form_input_error")
    }
    if (textearea.value == '') {
        textearea.classList.add("form_input_error")
        
    }

    if (email.value.indexOf ("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") . email.value.indexOf("@") == 1)) {
        email.classList.add("form_input_error")
        
    }else{
        email.classList.remove("form_input_error")

    }
    if (! ISNAN (email.value) == true && email.value.length ==11 ) {
        email.classList.remove("form_input_error")
        
    }
}