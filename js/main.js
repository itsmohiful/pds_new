function openSlideMenu(){
    document.getElementById('side-menu').style.width='100%';
    document.getElementById('side-menu').style.display='block';
    document.getElementById('side-menu').style.transition='0.5s';
    document.getElementById('main-dashboard').style.width='0%';
    //document.getElementById('ul-mi').style.width='100%';
    //document.getElementById('ul-mi').style.display='block';
    document.getElementById('close-btn').style.display='inline';
    document.getElementById('open-btn').style.display='none';
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width='0%';
    document.getElementById('side-menu').style.display='none';
    document.getElementById('side-menu').style.transition='0.5s';
   // document.getElementById('ul-mi').style.width='0%';
    //document.getElementById('ul-mi').style.display='none';
    document.getElementById('main-dashboard').style.width='100%';
    document.getElementById('open-btn').style.display='inline';
    document.getElementById('close-btn').style.display='none';
}