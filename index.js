const posts = [
    {
        name: "Chukwuyem john",
        username: "cj1853",
        location: "United Kingdom, London",
        avatar: "images/IMG-9307.jpg",
        posted:"images/IMG-9307.jpg",
        alt: "image of a distinguish artist",
        comment: "just took a few photos lol",
         isComment:false,
        isLiked: false,
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        posted: "images/2.jpg",
        alt: "image of a distinguish artist",
        comment: "i'm feelin a bit stressed tbh",
        isLiked: false,
        isComment:false,
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        posted: "https://unsplash.com/photos/qBvv6dSq3Gc",
        alt: "image of a distinguish artist",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        isLiked: false,
         isComment:false,
        likes: 152
    },
     {
        name: "Joseph Ducreux",
        username: "jm1635",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        posted: "images/1.jpg",
        alt: "image of a distinguish artist",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        isLiked: false,
        isComment:false,
        likes: 152
        
    }
]
/* use to get the like that was clicked */
document.addEventListener('click',function(e){
    if(e.target.dataset.heart){
        handlePost(e.target.dataset.heart)
    }
    else if(e.target.dataset.comment){
        handleComment(e.target.dataset.comment)
    }

})

/* this function get us a single obj from the array that has a matched username of like and increase the likes */

function handlePost(username){
  const targetPostobj = posts.filter(function(post){
            return post.username === username
  })[0]
  /* this controls the like  */
  if(targetPostobj.isLiked){
      targetPostobj.likes--
    //   targetPostobj.isLiked = false
      
    }else
    {
      targetPostobj.likes++
    //   targetPostobj.isLiked = true

  }
  targetPostobj.isLiked = !targetPostobj.isLiked
  
  render()
 
}

/* this function get us a single obj from the array that has a matched username of comment and increase the comment */
function handleComment(username){
    const targetCommentPost = posts.filter(function(post){
        return post.username === username
    })[0]
    if(targetCommentPost.isComment){
        targetCommentPost.comment 
    }else{
        targetCommentPost.comment
    }
    targetCommentPost.isComment =!targetCommentPost.isComment

    render()
    
}

/* this displays holds the feeds */
function getFeeds(){
    let displayFeed = ''
    posts.forEach(function(post) {
        /* changing the like icon color */
        let iconLikeClass = ''
        if(post.isLiked){
            iconLikeClass = 'liked'
            console.log('yes')
        }

        let commentClass = ''
        if(post.isComment){
            commentClass = 'comment'
            console.log('no')
           
        }


        displayFeed += 
        `
          <!-- user profile -->
        <section class="profile">
            <img  class="profile-picture portrait " src="${post.avatar}" alt="">
            <div>
                <h3 class="name">${post.name}</h3>
                <p class="location">${post.location}</p>
            </div>
        </section>

        <!-- user post -->

        <section class="post">
            <img id='post-img' class="post-img " src="${post.posted}" alt="${post.alt}">
        </section>
        
        <!-- viewers icon  -->
        <span class="post-icon">
          <span> <i  data-heart='${post.username}' class="fa-solid fa-heart ${iconLikeClass}"></i>
            </span>

           <span> <i data-comment='${post.username}' class="fa-regular fa-comment ${commentClass}"></i>
            </span>

           <span> <i data-arrow='${post.username}' class="fa-solid fa-square-arrow-up-right"></i>
            </span>
        </span>

        <!-- others -->
        <p class="likes ">${post.likes}</p>
        <p class="username">${post.username} <span class="quote ${post.comment}">${post.comment}</span></p>
        `
    });
    return displayFeed
}

/* this renders the feeds to the ui */
function render(){
    document.getElementById('feed').innerHTML = getFeeds()
}
render()