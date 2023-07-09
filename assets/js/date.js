const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const today = new Date();
const dayName = days[today.getDay()];
document.body.className = dayName;
