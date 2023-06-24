function volume_sphere() {
    //Write your code here
    var radius = parseFloat(document.getElementById('radius').value);

    // Calculate the volume of the sphere
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the volume to 4 decimal places
    volume = volume.toFixed(4);

    // Display the volume in the volume field
    document.getElementById('volume').value = volume;

    // Return false to prevent the form from submitting
    return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
