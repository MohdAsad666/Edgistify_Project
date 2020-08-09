const e = require("express");

{
    let createpost = function () {
        let newPostForm = $('#new-post-form');

        newPostForm.submit(function (e) {
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),
                success: function (data) {
                    let newPost = newPostDom(data.data.post);
                    $('#post-list-container>ul').prepend(newPost);
                    deletePost($(' .delete-post-button', newPost));
                },
                error: function (error) {
                    console.log(error.responseText);

                }
            });
        });

    }
    //creating a post in dom

    let newPostDom = function (post) {
        return $(`<li id="post-${post._id}">
        <small>
            <a class="delete-post-button" href="/posts/destroy/${post._id}">X</a>
        </small>
        <p>
            ${post.content}
        <br>
        ${post.user.name}
        </p>
    
        <div id="post-comment">
            <form action="/comments/create" method="POST">
                <input type="text" name="content" placeholder="Comment...">
                <input type="hidden" name="post" value="${post._id}">
                <input type="submit" value="comment">
            </form>
                    <div class="post-comment-list">
                        <ul id="post_comment-${post._id}">
    
                        </ul>
                    </div>
                </div>
            </li>`);
    }

    //method to delete a post
    let deletePost = function (deleteLink) {
        $(deleteLink).click(function (e) {
            e.preventDefault();

            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success: function (data) {
                    $(`#post-${data.data.post_id}`).remove();
                },
                error: function (error) {
                    console.log(error.responseText);

                }
            });
        })
    }
    createpost();
}

console.log("aaaaaaaaaaaaa");
