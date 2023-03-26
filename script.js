console.log("Welcome to Spotify");
//intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Save Your Tears", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Polozhenie x Night Lovell", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Soviet Connection (GTA 4 Theme)", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Angreji Beat", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "StarBoy", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Bad Liar", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Gangsta's Paradise", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},

]
songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
//audioElement.play();
//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
 

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
            
        })
    }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeALLPlays();
        songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause')
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})