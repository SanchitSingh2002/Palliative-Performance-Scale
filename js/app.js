$(document).ready(function () {
  $(document).foundation();
});

$(document).ready(function () {
  $(".slider").addClass("disabled");
});

// ---------------------------------------Ambulation Slider Start ---------------------------------------------------
$(document).ready(function () {
  // Initialize Foundation
  $(document).foundation();

  var slider1 = $("#slider_1");
  var dotsContainer = slider1.find(".yellow-dots-container");
  var subheader1 = $("#subheader_1");

  // Initialize the slider
  slider1.on("moved.zf.slider", function () {
      updateSubheader1(slider1.find(".slider-handle").attr("aria-valuenow"));
    }).foundation();
    addYellowDots();

  // Function to add yellow dots at each interval
  function addYellowDots() {
    dotsContainer.empty();
    var totalSteps = 100; // Default to 100 if data-end is not set
    var step = 10; // Default to 10 if data-step is not set

    for (var i = 0; i <= totalSteps; i += parseInt(step)) {
      dotsContainer.append('<div class="yellow-dot"></div>');
    }
  }

  // Function to update h5 text based on slider value
  function updateSubheader1(sliderValue) {
    // Clear existing text
    subheader1.empty();

    // Update text based on slider value range
    if (sliderValue == 0) {
      subheader1.text("Slide to see PPS Rating");
    } else if (sliderValue >= 10 && sliderValue <= 30) {
      subheader1.text("Totally Bed Bound");
    } else if (sliderValue == 40) {
      subheader1.text("Mainly in Bed");
    } else if (sliderValue == 50) {
      subheader1.text("Mainly Sit Lie");
    } else if (sliderValue >= 60 && sliderValue <= 70) {
      subheader1.text("Reduced");
    } else if (sliderValue > 70) {
      subheader1.text("Full");
    }
  }
});
// ---------------------------------------Ambulation Slider End ---------------------------------------------------
// ---------------------------------------Activiy Slider Start ---------------------------------------------------
$(document).ready(function () {
  // Initialize Foundation
  $(document).foundation();

  var slider2 = $("#slider_2");
  var dotsContainer = slider2.find(".yellow-dots-container");
  var subheader2 = $("#subheader_2");

  // Initialize the slider
  slider2.on("moved.zf.slider", function () {
      updateSubheader2(slider2.find(".slider-handle").attr("aria-valuenow"));
    }).foundation();
    addYellowDots();

  // Function to add yellow dots at each interval
  function addYellowDots() {
    dotsContainer.empty();
    var totalSteps = 100; // Default to 100 if data-end is not set
    var step = 10; // Default to 10 if data-step is not set

    for (var i = 0; i <= totalSteps; i += parseInt(step)) {
      dotsContainer.append('<div class="yellow-dot"></div>');
    }
  }

  // Function to update h5 text based on slider value
  function updateSubheader2(sliderValue) {
    // Clear existing text
    subheader2.empty();

    // Update text based on slider value range
    if (sliderValue == 0) {
      subheader2.text("Slide to See PPS Rating");
    } else if (sliderValue >= 10 && sliderValue <= 30) {
      subheader2.text("Unable to do any Activity");
    } else if (sliderValue == 40) {
      subheader2.text("Unable to do most Activity");
    } else if (sliderValue == 50) {
      subheader2.text("Unable to do any Work");
    } else if (sliderValue == 60) {
      subheader2.text("Unable to do hobby House/Work");
    } else if (sliderValue == 70) {
      subheader2.text("Unable to do Normal");
    }else if (sliderValue == 80) {
      subheader2.text("Normal Activity with Effort");
    }else{
      subheader2.text("Normal Activity");
    }
  }
});
// ---------------------------------------Activity Slider End ---------------------------------------------------
// ---------------------------------------Evidence of Disease Slider Start ---------------------------------------------------
$(document).ready(function () {
  // Initialize Foundation
  $(document).foundation();

  var slider3 = $("#slider_3");
  var dotsContainer = slider3.find(".yellow-dots-container");
  var subheader3 = $("#subheader_3");

  // Initialize the slider
  slider3.on("moved.zf.slider", function () {
      updateSubheader3(slider3.find(".slider-handle").attr("aria-valuenow"));
    }).foundation();

    addYellowDots();

  // Function to add yellow dots at each interval
  function addYellowDots() {
    dotsContainer.empty();
    var totalSteps = 100; // Default to 100 if data-end is not set
    var step = 10; // Default to 10 if data-step is not set

    for (var i = 0; i <= totalSteps; i += parseInt(step)) {
      dotsContainer.append('<div class="yellow-dot"></div>');
    }
  }

  // Function to update h5 text based on slider value
  function updateSubheader3(sliderValue) {
    // Clear existing text
    subheader3.empty();

    // Update text based on slider value range
    if (sliderValue == 0) {
      subheader3.text("Slide to See PPS Rating");
    } else if (sliderValue >= 10 && sliderValue <= 50) {
      subheader3.text("Extensive Disease");
    } else if (sliderValue >= 60 && sliderValue <=70) {
      subheader3.text("Significant Disease");
    } else if (sliderValue >=80 && sliderValue <=90) {
      subheader3.text("Some Evidence of Disease");
    } else {
      subheader3.text("No Evidence of Disease");
    }
  }
});
// ---------------------------------------Evidence of Disease Slider End ------------------------------------------------------
// ---------------------------------------Self Care Slider Start ------------------------------------------------------
$(document).ready(function () {
  // Initialize Foundation
  $(document).foundation();

  var slider4 = $("#slider_4");
  var dotsContainer = slider4.find(".yellow-dots-container");
  var subheader4 = $("#subheader_4");

  // Initialize the slider
  slider4.on("moved.zf.slider", function () {
      updateSubheader4(slider4.find(".slider-handle").attr("aria-valuenow"));
    }).foundation();

    addYellowDots();

  // Function to add yellow dots at each interval
  function addYellowDots() {
    dotsContainer.empty();
    var totalSteps = 100; // Default to 100 if data-end is not set
    var step = 10; // Default to 10 if data-step is not set

    for (var i = 0; i <= totalSteps; i += parseInt(step)) {
      dotsContainer.append('<div class="yellow-dot"></div>');
    }
  }

  // Function to update h5 text based on slider value
  // Function to update h5 text based on slider value
  function updateSubheader4(sliderValue) {
    // Clear existing text
    subheader4.empty();

    // Update text based on slider value range
    if (sliderValue == 0) {
      subheader4.text("Slide to See PPS Rating");
    } else if (sliderValue >= 10 && sliderValue <= 30) {
      subheader4.text("Total Care");
    } else if (sliderValue == 40) {
      subheader4.text("Mainly Assistance");
    } else if (sliderValue == 50) {
      subheader4.text("Considerable Assistance Required");
    } else if (sliderValue == 60) {
      subheader4.text("Occasional Assistance Necessary");
    } else if (sliderValue > 60) {
      subheader4.text("Full");
    }
  }
});
// ---------------------------------------Self Care Slider End ------------------------------------------------------
// ---------------------------------------Intake Slider Start------------------------------------------------------
$(document).ready(function () {
  // Initialize Foundation
  $(document).foundation();

  var slider5 = $("#slider_5");
  var dotsContainer = slider5.find(".yellow-dots-container");
  var subheader5 = $("#subheader_5");

  // Initialize the slider
  slider5.on("moved.zf.slider", function () {
      updateSubheader5(slider5.find(".slider-handle").attr("aria-valuenow"));
    }).foundation();

    addYellowDots();

  // Function to add yellow dots at each interval
  function addYellowDots() {
    dotsContainer.empty();
    var totalSteps = 100; // Default to 100 if data-end is not set
    var step = 10; // Default to 10 if data-step is not set

    for (var i = 0; i <= totalSteps; i += parseInt(step)) {
      dotsContainer.append('<div class="yellow-dot"></div>');
    }
  }

  // Function to update h5 text based on slider value
  function updateSubheader5(sliderValue) {
    // Clear existing text
    subheader5.empty();

    // Update text based on slider value range
    if (sliderValue == 0) {
      subheader5.text("Slide to See PPS Rating");
    } else if (sliderValue == 10) {
      subheader5.text("Mouth Care Only");
    } else if (sliderValue == 20) {
      subheader5.text("Minimal Sips");
    } else if (sliderValue == 30) {
      subheader5.text("Reduced");
    } else if (sliderValue >= 40 && sliderValue <= 80) {
      subheader5.text("Normal or Reduced");
    } else {
      subheader5.text("Normal");
    }
  }
});
// ---------------------------------------Intake  Slider End ------------------------------------------------------
// ---------------------------------------Level of Conciousness Start ------------------------------------------------------
$(document).ready(function () {
  // Initialize Foundation
  $(document).foundation();

  var slider6 = $("#slider_6");
  var dotsContainer = slider6.find(".yellow-dots-container");
  var subheader6 = $("#subheader_6");

  // Initialize the slider
  slider6.on("moved.zf.slider", function () {
      updateSubheader6(slider6.find(".slider-handle").attr("aria-valuenow"));
    }).foundation();

    addYellowDots();

  // Function to add yellow dots at each interval
  function addYellowDots() {
    dotsContainer.empty();
    var totalSteps = 100; // Default to 100 if data-end is not set
    var step = 10; // Default to 10 if data-step is not set

    for (var i =0; i <= totalSteps; i += parseInt(step)) {
      dotsContainer.append('<div class="yellow-dot"></div>');
    }
  }

  // Function to update h5 text based on slider value
  function updateSubheader6(sliderValue) {
    // Clear existing text
    subheader6.empty();

    // Update text based on slider value range
    if (sliderValue == 0) {
      subheader6.text("Slide to See PPS Rating");
    } else if (sliderValue == 10) {
      subheader6.text("Drowsy or Comma +/- Confusion");
    } else if (sliderValue >= 20 && sliderValue<=40) {
      subheader6.text("Full, Drowsy or +/- Confusion");
    } else if (sliderValue >= 50 && sliderValue<=60) {
      subheader6.text("Full or Confusion");
    } else  {
      subheader6.text("Full");
    } 
  }
});
// ---------------------------------------Level of Conciousness End ------------------------------------------------------


function toggleOptions() {
  var options = document.getElementById("options");
  options.style.display = options.style.display === "block" ? "none" : "block";
}

function updateTextbox(anything) {
  document.querySelector(".textBox").value = anything;
  if (document.querySelector(".textBox").value != "Choose a Diagnosis") {
    var t = document.getElementsByClassName("slider");
    t[0].classList = "slider";
    t[1].classList = "slider";
    t[2].classList = "slider";
    t[3].classList = "slider";
    t[4].classList = "slider";
    t[5].classList = "slider";
  }
  else
  {
    $(".slider").addClass("disabled");
  }
}

// -----------------------------------Calculate PPS Button--------------------------------------------
function calculatePPS() {
  // Get the values of each slider
  var ambulationValue = parseInt($("#slider_1").find(".slider-handle").attr("aria-valuenow"));
  var activityValue = parseInt($("#slider_2").find(".slider-handle").attr("aria-valuenow"));
  var evidenceValue = parseInt($("#slider_3").find(".slider-handle").attr("aria-valuenow"));
  var selfCareValue = parseInt($("#slider_4").find(".slider-handle").attr("aria-valuenow"));
  var intakeValue = parseInt($("#slider_5").find(".slider-handle").attr("aria-valuenow"));
  var consciousnessValue = parseInt($("#slider_6").find(".slider-handle").attr("aria-valuenow"));

  // Determine the minimum value among the sliders
  var minValue = Math.min(ambulationValue, activityValue, evidenceValue, selfCareValue, intakeValue, consciousnessValue);

  // Return the PPS Rating based on the minimum value
  if(minValue>90 || minValue == 100) return 100;
  else if(minValue>80 || minValue == 90) return 90;
  else if(minValue>70 || minValue == 80) return 80;
  else if(minValue>60 || minValue == 70) return 70;
  else if(minValue>50 || minValue == 60) return 60;
  else if(minValue>40 || minValue == 50) return 50;
  else if(minValue>30 || minValue ==  40) return 40;
  else if(minValue>20 || minValue ==  30) return 30;
  else if(minValue>10 || minValue ==  20) return 20;
  else return 10;

}
// ------------------------------------------End of Calculate PPS Functionality------------------------------------
// -------------------------------------------Start of Function for checking Eligibility------------------------------
function checkEligibility(diagnosis) {
  var ppsRating = calculatePPS();

  // Check eligibility based on the selected diagnosis
  switch (diagnosis) {
    case 'ALS':
    case 'Alzheimer':
    case 'Heart Disease':
    case 'HIV and AIDS':
    case 'Liver Disease':
    case 'Lung Disease':
    case 'Renal Disease':
    case 'Sepsis':
      return ppsRating >= 50;

    case 'Cancer':
      return ppsRating >= 70;

    default:
      return false;
  }
}

// ---------------------------------------End of Function for checking Eligibility-------------------------------------
// -----------------------------------------Calculate Button --------------------------------------------------------------
$(document).ready(function () {
  $("#calculate_button").click(function () {
    var ambulationValue = parseInt($("#slider_1").find(".slider-handle").attr("aria-valuenow"));
    var activityValue = parseInt($("#slider_2").find(".slider-handle").attr("aria-valuenow"));
    var evidenceValue = parseInt($("#slider_3").find(".slider-handle").attr("aria-valuenow"));
    var selfCareValue = parseInt($("#slider_4").find(".slider-handle").attr("aria-valuenow"));
    var intakeValue = parseInt($("#slider_5").find(".slider-handle").attr("aria-valuenow"));
    var consciousnessValue = parseInt($("#slider_6").find(".slider-handle").attr("aria-valuenow"));
    var selectedDiagnosis = $("#choose-a-Diagnosis-textbox").val();

    var ppsRating = calculatePPS();

    // Update the PPS rating in the success and error modals
    document.querySelector('.SuccessModalHeading').innerHTML = `<span>PPS Rating ~ ${ppsRating} %</span>`
    document.querySelector('.ErrorModalHeading').innerHTML = `<span>PPS Rating ~ ${ppsRating} %</span>`

    var successModalText = "A patient with " + selectedDiagnosis + " and a PPS rating of " + ppsRating + "% or less may be eligible for hospice care.";
    var errorModalText = "A patient with " + selectedDiagnosis + " and a PPS rating of " + ppsRating + "% or less may not be eligible for hospice care.";

    $("#successModal p.info-text").html(successModalText);
    $("#errorModal p.info-text").html(errorModalText);

    if (selectedDiagnosis === "Choose a Diagnosis" || ambulationValue == 0 || activityValue == 0 || evidenceValue == 0 || selfCareValue == 0 || intakeValue == 0 || consciousnessValue == 0) {
      $("#Select-a-Diagnosis-Modal").foundation("open");
    } else if (ppsRating <= calculateEligibilityThreshold(selectedDiagnosis)) {
      // Show success modal
      $("#successModal").foundation("open");
    } else {
      // Show error modal
      $("#errorModal").foundation("open");
    }
  });
});



// Function to calculate eligibility threshold based on diagnosis
function calculateEligibilityThreshold(diagnosis) {
  // Your logic to determine eligibility threshold based on the diagnosis
  // For example, using static thresholds for simplicity
  var static_values = {
    ALS: 50,
    Alzheimer: 50,
    Cancer: 70,
    "Heart Disease": 50,
    "HIV and AIDS": 50,
    "Liver Disease": 50,
    "Lung Disease": 50,
    "Renal Disease": 50,
    Sepsis: 50,
  };

  return static_values[diagnosis] || 0;
}

// ------------------------------------------End of Calculate Button----------------------------------------------------------
