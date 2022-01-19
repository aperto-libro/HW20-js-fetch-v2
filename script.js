const postTitle = document.querySelector('.title');
const postDescription = document.querySelector('.description');
const listOfComments = document.querySelector('.comments-list');
const titleUrl = 'https://jsonplaceholder.typicode.com/posts';
const addCommentButton = document.querySelector('.comment-create');
const newCommentInput = document.querySelector('.comment-input');
const initialId = 1;

class Post {
  constructor(title, description, comments, button, commentInput, id = initialId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.comments = comments;
    this.addCommentBtn = button;
    this.commentInput = commentInput;

    this.addCommentBtn.addEventListener('click', () => {
      try {
        let input = this.commentInput.value;
        if (input.length <= 0) {
          return;
        }
        this.postNewComment({ body: this.commentInput.value });
        this.renderNewComment();
        this.commentInput.value = '';
      } catch (err) {
        console.log(err);
      }
    });
  }

  async getPost() {
    try {
      let res = await fetch(`${titleUrl}/${this.id}`);
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async showPost() {
    try {
      let postInfo = await this.getPost();
      this.renderPostInfo(postInfo);
    } catch (err) {
      console.log(err);
    }
  }

  renderPostInfo(postData) {
    this.title.innerHTML = `Title: ${postData.title}`;
    this.description.innerHTML = `Description: ${postData.body}`;
  }

  async getComments() {
    try {
      let res = await fetch(`${titleUrl}/${this.id}/comments`);
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async showComments() {
    try {
      let commentsInfo = await this.getComments();
      this.renderComments(commentsInfo);
    } catch (err) {
      console.log(err);
    }
  }

  async renderComments(commentsData) {
    let commentsList = '';

    for (const item of commentsData) {
      commentsList += `<li class="comment-item"> &#10077;&#10077 ${item.body} &#10078;&#10078</li>`;
    }

    this.comments.innerHTML = commentsList;
  }

  async postNewComment(data) {
    let res = await fetch(`${titleUrl}/${this.id}/comments`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return res.json();
  }

  renderNewComment() {
    let newComment = document.createElement('li');
    newComment.classList.add('comment-item');
    newComment.innerHTML = `<li class="comment-item"> &#10077;&#10077 ${this.commentInput.value} &#10078;&#10078</li>`;
    this.comments.append(newComment);
  }
}

let post1 = new Post(postTitle, postDescription, listOfComments, addCommentButton, newCommentInput);

post1.showPost();
post1.showComments();
