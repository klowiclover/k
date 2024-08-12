// Load YouTube API and create the player
function onYouTubeIframeAPIReady() {
    new YT.Player('video-background', {
        height: '100%',
        width: '100%',
        videoId: 'MnKoSm1-RXw', // Replace with your YouTube video ID
        playerVars: {
            autoplay: 1, // Auto-play the video
            controls: 0, // Hide controls
            loop: 1, // Loop the video
            playlist: 'MnKoSm1-RXw', // Required for looping a single video
            mute: 1 // Mute the video
        },
        events: {
            onReady: function(event) {
                event.target.mute(); // Ensure video is muted
            }
        }
    });
}
