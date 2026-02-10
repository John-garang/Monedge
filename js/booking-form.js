// Form submission handler
document.getElementById('care-plan-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Collect form data
    const formData = {
        name: form.querySelector('input[name="name"]')?.value || '',
        phone: form.querySelector('input[name="phone"]')?.value || '',
        email: form.querySelector('input[name="email"]')?.value || '',
        recipientName: form.querySelector('input[name="recipientName"]')?.value || '',
        recipientAge: form.querySelector('input[name="recipientAge"]')?.value || '',
        relationship: form.querySelector('input[name="relationship"]')?.value || '',
        recipientAddress: form.querySelector('input[name="recipientAddress"]')?.value || '',
        serviceTypes: Array.from(form.querySelectorAll('input[name="serviceType"]:checked')).map(cb => cb.value).join(', '),
        startDate: form.querySelector('input[name="startDate"]')?.value || '',
        endDate: form.querySelector('input[name="endDate"]')?.value || '',
        hoursFrom: form.querySelector('input[name="hoursFrom"]')?.value || '',
        hoursTo: form.querySelector('input[name="hoursTo"]')?.value || '',
        frequency: form.querySelector('select[name="frequency"]')?.value || '',
        scopeOfService: Array.from(form.querySelectorAll('input[name="scope"]:checked')).map(cb => cb.value).join(', '),
        medicalConditions: form.querySelector('textarea[name="medicalConditions"]')?.value || '',
        medication: form.querySelector('textarea[name="medication"]')?.value || '',
        allergies: form.querySelector('textarea[name="allergies"]')?.value || '',
        agreedRate: form.querySelector('input[name="agreedRate"]')?.value || '',
        billingCycle: form.querySelector('input[name="billing"]:checked')?.value || '',
        paymentMethod: form.querySelector('input[name="payment"]:checked')?.value || '',
        primaryContactName: form.querySelector('input[name="primaryContactName"]')?.value || '',
        primaryContactPhone: form.querySelector('input[name="primaryContactPhone"]')?.value || '',
        secondaryContactName: form.querySelector('input[name="secondaryContactName"]')?.value || '',
        secondaryContactPhone: form.querySelector('input[name="secondaryContactPhone"]')?.value || '',
        preferredClinic: form.querySelector('input[name="preferredClinic"]')?.value || ''
    };
    
    console.log('Form Data:', formData);
    
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzApOInv2K8nu2sVkuoELFEzoc10Z-AQBg1lyMwmrRv2SbVhbZAlTdIbiuHXWE4dt7cdg/exec', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('✅ Thank you! Your care plan request has been submitted successfully. We will contact you shortly.');
            form.reset();
        } else {
            throw new Error(result.error || 'Submission failed');
        }
    } catch (error) {
        alert('❌ There was an error submitting your request. Please try again or contact us directly at 0788-370505');
        console.error('Error:', error);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
