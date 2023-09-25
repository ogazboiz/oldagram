const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const postsContainer = document.getElementById("posts-container");

posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className = "post-section";

    const postContainer = document.createElement("div");
    postContainer.className = "post-container";

    const postProfileImg = document.createElement("img");
    postProfileImg.className = "post-profile-img";
    postProfileImg.src = post.avatar;
    postProfileImg.alt = "";

    const postInfoDiv = document.createElement("div");
    const postName = document.createElement("h3");
    postName.textContent = post.name;
    const postLocation = document.createElement("p");
    postLocation.textContent = post.location;

    postInfoDiv.appendChild(postName);
    postInfoDiv.appendChild(postLocation);

    const postImg = document.createElement("img");
    postImg.className = "post-img";
    postImg.src = post.post;
    postImg.alt = "";

    const postFooter = document.createElement("div");
    postFooter.className = "post-footer";

    const postIcons = document.createElement("div");
    postIcons.className = "icons";

    // Create and append the heart icon
    const heartIcon = document.createElement("img");
    heartIcon.className = "icon";
    heartIcon.src = "/images/icon-heart.png";
    heartIcon.alt = "";
    postIcons.appendChild(heartIcon);

    // Create and append the comment icon
    const commentIcon = document.createElement("img");
    commentIcon.className = "icon";
    commentIcon.src = "/images/icon-comment.png";
    commentIcon.alt = "";
    postIcons.appendChild(commentIcon);

    // Create and append the DM icon
    const dmIcon = document.createElement("img");
    dmIcon.className = "icon";
    dmIcon.src = "/images/icon-dm.png";
    dmIcon.alt = "";
    postIcons.appendChild(dmIcon);

    postFooter.appendChild(postIcons);

    const postLikes = document.createElement("h3");
    postLikes.textContent = `${post.likes} likes`;
    const postComment = document.createElement("p");
    postComment.innerHTML = `<span>${post.username}</span> ${post.comment}`;

    postFooter.appendChild(postLikes);
    postFooter.appendChild(postComment);

    postContainer.appendChild(postProfileImg);
    postContainer.appendChild(postInfoDiv);

    postDiv.appendChild(postContainer);
    postDiv.appendChild(postImg);
    postDiv.appendChild(postFooter);

    postsContainer.appendChild(postDiv);
});
