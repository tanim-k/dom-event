//1: add button event handler/////
document.getElementById('submit-comment').addEventListener('click', function(){

    // 2: get user comment //////    
        const commentBox = document.getElementById('new-comment');
        const userComment = commentBox.value;
       
    // 3: create comment paragraph ////
        const newComment = document.createElement('p');
        newComment.innerText = commentBox.value;
        
    // 4: append new comment ////    
        const commentContainer = document.getElementById('comment-container');
        commentContainer.appendChild(newComment);
    // 5: clean the comment box //// 
        commentBox.value = '';
    })
    // html background//
    document.getElementById('comment-container');
        document.body.style.backgroundColor = '#FFEDED'
        document.body.style.fontFamily = 'Supermercado One', 'cursive';
    // comment box p etc cascading with js //
    const submitPost = document.getElementById('submit-comment');
         submitPost.style.backgroundColor = '#E2D5D5'
         submitPost.style.color = '#FFDADA'
         submitPost.style.padding = '5px'
         submitPost.style.fontSize = '30px'
         submitPost.style.margin = '5px'
         document.getElementById('submit-comment').style.borderRadius = '10px'
         document.getElementById('submit-comment').style.color = '#FAEEE0'
         document.getElementById('submit-comment').style.width = '150px'
         document.getElementById('new-comment').style.width = '50%'
         document.getElementById('new-comment').style.borderRadius = '10px';
         document.getElementById('new-comment').style.backgroundColor = '#FDEFEF';
        //  blogs cascading by js //////
        const blogs = document.getElementsByTagName('p');
        console.log(blogs)
        for(const blog of blogs) {
            blog.style.backgroundColor = '#FFEDED';
            blog.style.padding = '10px';
            blog.style.borderRadius = '5px';
            blog.style.marginTop = '10px';
            blog.style.color = '#A68DAD';
        }