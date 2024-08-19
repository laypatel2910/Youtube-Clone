var subsButton = document.querySelector(".subsButton");
subsButton.onclick = function () {
    subsButton.classList.toggle("changsubsButton")
    subsButton.innerHTML= "Subscribe";
}

window.onload = () => {
    const mykeysvalue = window.location.search;
    const urlParams = new URLSearchParams(mykeysvalue)
    const videoSrc = urlParams.get('videoSrc')
    const iframe = document.getElementById('Video');
    iframe.src = videoSrc;
}


// Select the input field and the container where previous comments are displayed
var commentInput = document.querySelector('.writecommentConrtainer input[type="text"]');
var previousCommentsContainer = document.querySelector('.previouscommentsConrtainer');
var commentCountElement = document.querySelector('.commentConrtainer h1');

// Add an event listener for the 'keypress' event on the input field
commentInput.addEventListener('keypress', function (event) {
    // Check if the pressed key is 'Enter'
    if (event.key === 'Enter' && commentInput.value.trim() !== '') {
        // Prevent the default action
        event.preventDefault();

        // Create a new comment element
        var newComment = document.createElement('div');
        newComment.classList.add('previouscomments', 'd-flex');

        // Create the HTML structure for the new comment
        newComment.innerHTML = `
            <img class="channelIcon" src="/Image/UserProfile.jpeg" alt="UserImage">
            <div class="nameAndComment">
                <p class="channelName">@Laymanavadariya</p>
                <p class="comment">${commentInput.value}</p>
            </div>
        `;

        // Add the new comment to the previous comments container
        previousCommentsContainer.appendChild(newComment);

        // Clear the input field
        commentInput.value = '';

        // Update the comment count
        updateCommentCount();
    }
});

// Function to update the comment count
function updateCommentCount() {
    var commentCount = previousCommentsContainer.querySelectorAll('.previouscomments').length;
    commentCountElement.textContent = commentCount + ' Comments';
}

// Call the function initially to set the correct count on page load
updateCommentCount();
