// Form Validation
const forms = document.querySelectorAll('.needs-validation');

Array.from(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            alert('Form submitted successfully!');
            form.reset();
            form.classList.remove('was-validated');
            bootstrap.Modal.getInstance(document.getElementById('contactModal')).hide();
        }
        form.classList.add('was-validated');
    });
});
