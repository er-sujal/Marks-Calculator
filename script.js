function calculatePercentage() {
    
    var marks1 = parseInt(document.getElementById("marks1").value);
    marks1=Math.abs(marks1);
    var marks2 = parseInt(document.getElementById("marks2").value);
    marks2=Math.abs(marks2);

    // Validate input values
    if (marks1 > 20) {
        alert("Marks (out of 20) should not be more than 20.");
        return;
    }

    if (marks2 > 40) {
        alert("Marks (out of 40) should not be more than 40.");
        return;
    }

    // Calculate percentage
    var percentage = ((marks1 + marks2) * 40) / 60;
    var pfinal = (40-percentage)
    

    // Display result
    document.getElementById("percentage").innerHTML = "Remaining marks is " + ": " + pfinal;
    document.getElementById("pp").innerHTML = "Marks you got is " + ": " + percentage;
}
