<template>
    <div class="article">
        <div class="article_content_wrapper">
            <div class="article_content">
                <div class="loading" v-if="isLoading">
                    <Loader></Loader>
                </div>
                <div v-else>
                    <div class="topic_header">
                        <div class="topic_title">{{ post.title }}</div>
                        <ul>
                            <li><span class="spot">&bull;</span>发布于&nbsp;{{ post.create_at | formatDate }}</li>
                            <li><span class="spot">&bull;</span>作者&nbsp;{{ post.author.loginname }}</li>
                            <li><span class="spot">&bull;</span>{{ post.visit_count }}&nbsp;次浏览</li>
                            <li><span class="spot">&bull;</span>来自&nbsp;{{ post | tabFormatter }}</li>
                        </ul>
                        <div v-html="post.content" class="topic_content markdown-body"></div>
                    </div>
                    <div id="reply">
                        <div class="topbar">回复</div>
                        <div v-for="(reply,index)  in post.replies" :key="index" class="replySec">
                            <div class="replyUp">
                                <router-link :to="{
                                    name:'user_info',
                                    params:{
                                        name:reply.author.loginname
                                    }
                                }">
                                    <img :src="reply.author.avatar_url" alt="">
                                </router-link>
                                <router-link :to="{
                                    name:'user_info',
                                    params:{
                                        name:reply.author.loginname
                                    }
                                }">
                                    <span>{{ reply.author.loginname }}</span>
                                </router-link>
                                <span>
                                    {{ index + 1 }}楼
                                </span>
                                <span v-if="reply.ups.length>0">&nbsp;☝&nbsp;{{ reply.ups.length }}
                                </span>
                                <span v-else>
                            </span>
                            </div>
                            <p class="reply_content" v-html="reply.content"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Article",
        data() {
            return {
                isLoading: false,//是否正在加载
                post: {}//代表当前文章页的所有内容，所有属性
            }
        },
        methods: {
            getArticleData() {
                this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
                    .then(res => {
                        this.post = res.data.data
                        this.isLoading = false
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            }
        },
        beforeMount() {
            this.isLoading = true
            this.getArticleData()
        },
        watch:{
            '$route'(to,from){
                this.getArticleData()
            }
        }
    }
</script>

<style scoped>
    @import "~github-markdown-css";

    .article{
        max-width: 70%;
        min-width: 960px;
    }

    .article_content_wrapper{

    }

    .article_content{

    }

    .topic_header{
        border-radius: 3px;
    }

    .spot{
        padding: 0 5px;
    }

    .topbar {
        padding: 10px;
        background-color: #f6f6f6;
        height: 16px;
        font-size: 12px;
        margin-top: 10px;
    }

    #reply, .topic_header {
        background-color: #fff;
    }

    #reply {
        margin-top: 15px;
        border-radius: 3px;
    }

    #reply img {
        width: 30px;
        height: 30px;
    }

    #reply a, #reply span {
        font-size: 13px;
        color: #666;
        text-decoration: none;
    }

    .replySec {
        border-bottom: 1px solid #e5e5e5;
        padding: 10px;
    }

    .replySec a {
        color: #094E99;
        text-decoration: none;
    }

    .replyUp {
        display: flex;
        align-items: start;
    }

    .replyUp span {
        padding-left: 10px;
    }

    .reply_content {
        padding: 0 0 15px 50px;
    }

    .topic_header {
        padding: 10px;
    }

    .topic_title {
        font-size: 22px;
        font-weight: bold;
        padding-top: 8px;
    }

    .topic_header ul {
        list-style: none;
        padding: 0px 0px;
        margin: 6px 0px;
    }

    .topic_header li {
        display: inline-block;
        font-size: 12px;
        color: #838383;
    }

    .topic_content {
        border-top: 1px solid #e5e5e5;
        padding: 0 10px;
    }

    .markdown-text img {
        width: 92% !important;
    }
</style>
