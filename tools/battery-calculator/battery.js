document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
});


function calculate(){
    let interval = document.getElementById('interval_minutes').value;

    let expectedLifetime = DeviceConfig.calculateExpectedBatteryLifetime(interval, 0x0206, "1.35");

    document.getElementById('selected_interval').innerText = (interval == 1) ? `${interval} minute` : `${interval} minutes`;
    document.getElementById('sf7').innerText = expectedLifetime.SF7;
    document.getElementById('sf8').innerText = expectedLifetime.SF8;
    document.getElementById('sf9').innerText = expectedLifetime.SF9;
    document.getElementById('sf10').innerText = expectedLifetime.SF10;
    document.getElementById('sf11').innerText = expectedLifetime.SF11;
    document.getElementById('sf12').innerText = expectedLifetime.SF12;
}
calculate();