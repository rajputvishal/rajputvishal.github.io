Vue.component('my-checkbox', {
    template: '<div class="checkbox-wrapper" @click="check"><div :class="{ checkbox: true, checked: checked }"></div><div class="title">{{ title }}</div></div>',
    data() {
      return {
        checked: false,
        title: 'Check me'
      }
    },
    methods: {
      check() {
        this.checked = !this.checked;
      }
    }
  });

Vue.component("my-header", {
    template: `<header>
                <div id="mobile-menu-close">
                    <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <ul id="menu" class="shadow">
                    <li><a href="/">Home</a></li>
                    <li><a class="no-scroll" href="/articles.htm">Articles</a></li>
                    <li><a href="./projects.htm">Projects</a></li>
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


Vue.component("my-footer", {
    template: '<footer class="border"><p>Copyright Vishal Rajput <span id="footer-date">2019</span></p></footer>'
})