// Form submission handler
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    const formData = {
        name: form.querySelector('input[name="name"]')?.value || '',
        email: form.querySelector('input[name="email"]')?.value || '',
        phone: form.querySelector('input[name="phone"]')?.value || '',
        message: form.querySelector('textarea[name="message"]')?.value || ''
    };
    
    console.log('Form Data:', formData);
    
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzApOInv2K8nu2sVkuoELFEzoc10Z-AQBg1lyMwmrRv2SbVhbZAlTdIbiuHXWE4dt7cdg/exec', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('✅ Thank you! Your message has been sent successfully. We will contact you shortly.');
            form.reset();
        } else {
            throw new Error(result.error || 'Submission failed');
        }
    } catch (error) {
        alert('❌ There was an error sending your message. Please try again or contact us directly at 0788-370505');
        console.error('Error:', error);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
