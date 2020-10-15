const dateconverter = require('../services/dateService')
const numberConverter = require('../services/numberService')
class PostPresenter {
    constructor(post) {
        this.post = post
    }
    toJalaliCreatedAt() {
        let newPost = this.post
        newPost = newPost.map((post) => {
            post.created_at = dateconverter.toPersianDate(post.created_at)
            return post;
        })
        return newPost
    }

    toPersianNumber() {
        let newPost = this.post
        newPost = newPost.map((post) => {
            post.view = numberConverter.toPersianNumber(post.view)
        })
        return newPost
    }
}
module.exports = PostPresenter
