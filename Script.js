$(document).ready(function () {


    
  
    var timeBlock = [
      {
        label: "9:00 am",
        tValue: "09",
        userInput: "",
      },
      {
        label: "10:00 am",
        tValue: "10",
        userInput: "",
      },
      {
        label: "11:00 am",
        tValue: "11",
        userInput: "",
      },
      {
        label: "12:00 pm",
        tValue: "12",
        userInput: "",
      },
      {
        label: "1:00 pm",
        tValue: "13",
        userInput: "",
      },
      {
        label: "2:00 pm",
        tValue: "14",
        userInput: "",
      },
      {
        label: "3:00 pm",
        tValue: "15",
        userInput: "",
      },
      {
        label: "4:00 pm",
        tValue: "16",
        userInput: "",
      },
      {
        label: "5:00 pm",
        tValue: "17",
        userInput: "",
      },
    ]
  
  
   
    $("#currentDay").text(dayjs().format("ddd, MMM DD, YYYY"));
  
  
    
    $(timeBlock).each(function (i) {
      var row = $("<div>");
      if (i < $(timeBlock).length) {
        row
          .addClass("row")
        $(".container").append(row);
      }
      i++
    });
  
    $("div.row").each(function (i) {
      var timeValue = timeBlock[i].tValue;
      var labelCol = $("<div>");
      var inputCol = $("<div>");
  
      labelCol
        .addClass("col-2 hour")
        .text(timeBlock[i].label)
      inputCol
        .addClass("col-10 time-block")
        .attr("value", timeValue)
      $(this).append(labelCol);
      $(this).append(inputCol);
      i++
    });
  
  
    
    $(".time-block").each(function (i) {
      var currentHour = parseInt(dayjs().format('H'));
      var timeId = $(this).attr("value");
      if (currentHour < timeId) {
        $(this).addClass("future");
      } else if (currentHour == timeId) {
        $(this).addClass("present");
      } else if (currentHour > timeId) {
        $(this).addClass("past");
      }
      i++
    })
  
  

    $(".time-block").each(function (i) {
      var saveCol = $("<button>");
      var timeValue = timeBlock[i].tValue;
      var inputDesc = $("<textarea>").text(timeBlock[i].userInput);
      inputDesc
        .addClass("description")
        .addClass("float-left")
        .attr("id", timeValue)
      saveCol
        .addClass("col-1 saveBtn float-right")
        .text("Save")
      $(this).append(inputDesc)
      $(this).append(saveCol);
      $(".description").show()
      i++
    });
  
  
   
    $(".saveBtn").on("click", function () {
      var savedInput = $(this).siblings("textarea").val()
      var timeInput = $(this).parent().attr("value")
      localStorage.setItem(timeInput, savedInput);
    });
  
    
    $("#09").val(localStorage.getItem("09"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#13").val(localStorage.getItem("13"))
    $("#14").val(localStorage.getItem("14"))
    $("#15").val(localStorage.getItem("15"))
    $("#16").val(localStorage.getItem("16"))
    $("#17").val(localStorage.getItem("17"))
  
  });
  