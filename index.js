
setInterval(()=>{
    
    d = new Date();

    h = d.getHours() ;
    m = d.getMinutes() ;
    s = d.getSeconds() ;

    hRotation = 30*h + m/2 + s/120 ;
    mRotation = 6*m + s/10 ;
    sRotation = 6*s;
     
    hour.style.transform = `rotate(${hRotation}deg)` ;
    min.style.transform = `rotate(${mRotation}deg)` ;
    sec.style.transform = `rotate(${sRotation}deg)` ;

    document.getElementById("digitaltime").innerText = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

},1000);

// String(h).padStart(2,'0') is used to set two fixed no. while showing time.