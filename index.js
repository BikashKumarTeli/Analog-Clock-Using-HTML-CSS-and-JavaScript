setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);


// hr = 12;
// mn = 0;
// sc = 0;

// setInterval(() => {


//     hrr = 30 * hr + mn / 2;
//     mrr = 6 * mn;
//     scr = 6 * sc;
    
//     hour.style.transform = `rotate(${hrr}deg)`;
//     minute.style.transform = `rotate(${mrr}deg)`;
//     second.style.transform = `rotate(${scr}deg)`;

//     sc++;
//     if(sc == 60) {
//         mn++;
//         sc = 0;
//     }

//     if(mn == 60) {
//         hr++;
//         mn = 0;
//     }

//     if(hr == 13) {
//         hr = 1;
//     }


// }, 1);