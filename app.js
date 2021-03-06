function toggleElement(target, delay) {
  setTimeout(function() {
    document.getElementById(target).classList.toggle('hidden');
  }, delay);
}

window.onload = function(){
    toggleElement('grid', 0);
    toggleElement('grid--column-1', 300);
    toggleElement('grid--column-2', 600);
    toggleElement('grid--column-3', 900);
    toggleElement('grid--column-4', 1300);
    toggleElement('titles-section', 1600);
    toggleElement('about-section', 1900);
    toggleElement('skills-section', 2200);
    toggleElement('work-section', 2500);
    toggleElement('misc-section', 2800);
    toggleElement('grid--column-1', 3100);
    toggleElement('grid--column-2', 3100);
    toggleElement('grid--column-3', 3100);
    toggleElement('grid--column-4', 3100);
    toggleElement('grid', 3300);
};
