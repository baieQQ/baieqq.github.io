const products = [{
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1516906571665-49af58989c4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=80',
    name: 'MacBook Pro',
    onStock: false,
  },{
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    name: 'iPhone',
    onStock: false,
  }];
  const App = {
    data() {
      return {
        temp: {
            name: "",
            imageUrl: "https://images.unsplash.com/photo-1602526430780-782d6b1783fa?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            
        }
      }
    },
    methods: {
    },
  };
  
  Vue.createApp(App).mount('#app');