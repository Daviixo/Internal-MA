function generateDate() {
    
    var getDate = document.getElementById("dateTime").value;

    console.log("Captured date: " + getDate);

    var date = new Date(getDate);
    currentMonth = date.getUTCMonth();
    finalDay = date.getDay();
    date = date.toUTCString();
    console.log("Getting month... " + currentMonth);
    console.log("My 1st DATE: " + date);
    console.log("My 1st DATE 2: " + date.toISOString);

    // Example: Thu, 30 Jun 2022 22:49:00 GMT

    splitDate = date.split(" ");
    console.log("SPLIT: " + splitDate);
    console.log("SPLIT0: " + splitDate[0]);
    console.log("SPLIT1: " + splitDate[1]);
    console.log("SPLIT2: " + splitDate[2]);
    console.log("SPLIT3: " + splitDate[3]);
    console.log("SPLIT4: " + splitDate[4]);
    console.log("SPLIT5: " + splitDate[5]);

    // Splitting the date

    splitWeekDay = splitDate[0].replace(",","");
    splitDay = splitDate[1];
    splitMonth = splitDate[2];
    splitYear = splitDate[3];
    splitTime = splitDate[4];
    splitTimezone = splitDate[5];

    // Let's now divide our time

    finalTime = splitDate[4].split(":");
    splitHour = finalTime[0];
    splitMinutes = finalTime[1];
    splitMinutesOne = splitMinutes[0];
    splitMinutesTwo = splitMinutes[1];

    // To double check the event's parameters

    console.log("Final year: " + splitYear);
    console.log("Final Month: " + splitMonth);
    console.log("Final Month (#): " + currentMonth);
    console.log("Final Day: " + splitDay);
    console.log("Final Hour: " + splitHour);
    console.log("Final Minutes One: " + splitMinutesOne);
    console.log("Final Minutes Two: " + splitMinutesTwo);

    console.log("HOUR: " + splitHour);
    console.log("MINUTES: " + splitMinutes);

    finalSplitMinutes = splitMinutesOne + splitMinutesTwo;

    var d = new Date(splitYear,currentMonth,splitDay,splitHour,finalSplitMinutes);
    var ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    var mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    var da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
    var wd = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d);
    var ti = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: true, minute: '2-digit'}).format(d);

    // Let's add period (AM/PM) to our time.

     // Example: Tuesday, March 8th at 06:00 AM UTC

    alert("Allan's format: " + wd + ", " + mo + " " + da + " at " + ti + " UTC");

}