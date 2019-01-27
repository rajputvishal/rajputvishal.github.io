Vue.component("my-header", {
    props: ["active"],
    template: `<header>
                <div id="mobile-menu-close">
                    <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <ul id="menu" class="shadow">
                    <li><a :class="{active: active == 'home' ? true : false}" href="/index.htm">Home</a></li>
                    <li><a :class="{active: active == 'project' ? true : false}" href="#">Projects</a></li>
                    <li><a :class="{active: active == 'about' ? true : false}" href="/about.htm">About me</a></li>
                    <li class="slide-menu" v-bind:class="{active: isContactActive}" v-on:click="contactClick"><a class="slide-menu" href="javascript:">Contact</a></li>                    
                    <li class="slide-option">
                        <ul>
                            <li>
                                <a href="https://github.com/rajputvishal" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://stackoverflow.com/users/1720452/vishal" target="_blank"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/rajputvishal/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/vi5halR" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://plus.google.com/" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </li>                   
                </ul>
            </header>`,
    data() {
        return {
            isContactActive: false
        }
    },        
    methods: {
        contactClick: function() {
            this.isContactActive = !this.isContactActive
        }
    }                

})

Vue.component("top-story", {   
    props: ['story'],
    template: `<div class="top-story" >
                <a :href="story.link" :style="'background: url('+ story.image+ ')'" class="card main-story">                                    
                    <div class="card-body">
                        <h5 class="card-title">{{story.title}}</h5>
                        <p class="card-text">{{story.description}}</p>                                
                    </div>
                </a>        
                </div>`
})

Vue.component("category-item", {
    props: ['item'],
    template: "<li class='section-headline'><a :href='item.link' >{{item.title}}</a></li>"
})

Vue.component("category", {
    props: ['category', 'list'],
    template: `<div class="col-md-4 category">
                    <h2>{{category}}</h2>
                    <div class="content">
                        <ul>
                            <category-item v-for="item in list" v-bind:item="item" v-if="category == item.category"></category-item>
                        </ul>
                    </div>
                </div> `
});

Vue.component("my-para", {
    props: ['text'],
    template: "<p>{{text}}</p>"
})

Vue.component("my-video", {
    props: ['html'],
    template: "<div v-html='html'></div>"
})

Vue.component("my-ul", {
    props: ['list'],
    template: "<ul><li v-for='item in list'>{{item.text}}</li></ul>"
})

Vue.component("my-ol", {
    props: ['list'],
    template: "<ol><li v-for='item in list'>{{item.text}}</li></ol>"
})

Vue.component("my-img", {
    props: ['alt', 'href', 'imgclass'],
    template: '<img :src="href" :class="imgclass" :alt="alt"></img>'
})

Vue.component("my-footer", {
    template: '<footer class="border"><p>Copyright Vishal Rajput <span id="footer-date">2019</span></p></footer>'
})