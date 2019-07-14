function formatTime(min) {
    if (min < 0) {
        return 'Negative number';
    } else {
        return `${Math.floor(min / 1440)} day(s) ${Math.floor(min % 1440 / 60)} hour(s) ${min % 60} minute(s).`;
    }
}
  
formatTime(120);
formatTime(59);
formatTime(3601);