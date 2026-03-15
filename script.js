document.addEventListener('DOMContentLoaded', () => {
    const slots = document.querySelectorAll('.slot');

    slots.forEach(slot => {
        slot.addEventListener('click', () => {
            if (slot.classList.contains('available')) {
                slot.classList.remove('available');
                slot.classList.add('occupied');
                alert(`${slot.id} is now occupied.`);
            } else {
                slot.classList.remove('occupied');
                slot.classList.add('available');
                alert(`${slot.id} is now available.`);
            }
        });
    });
});