
  import About from '../components/About.vue'; // Assuming your About component is in components/About.vue
  import Test from '../components/TestHeader.vue'

  
  
  // Define all routes here:
  const routes = [

     {path:'/test',component:Test },
     { path: '/about', component: About },
     
    // Add more routes as needed
  ];
  
  export default routes;