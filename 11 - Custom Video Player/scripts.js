


// get elements

//build our functions

// hook up event listeners


const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



function togglePlay(){

    const method = video.paused ? 'play' : 'pause';
   video[method]();

};
function updateButton() {

    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;

    console.log('update the button');

};
// used for video scrubing skip allong buttons.
function skip(){
       // console.log('skip');
        video.currentTime += parseFloat(this.dataset.skip);
    };
function handleRangeUpdate(){
    // this handles the rate of play time ie slow the playback speed down and speed it up. as the volume works in the same way it can be used for that too hence why video [this.whatever] is used.
   video[this.name] = this.value;
}


function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = '${percent}%';
}

function scrub(e){
    c
    const scrubTime = (e.offsetX/  progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',scrub);

progress.addEventListener('mousedown', () => mouseDown = true);
 progress.addEventListener('mouseup', () => mouseDown = false);