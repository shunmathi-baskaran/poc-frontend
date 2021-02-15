import { createApp } from 'vue';
import Login from './components/Login.vue';
import 'bootstrap/dist/css/bootstrap.min.css'

// Mount function to start up the app
const mount = (el /*,onLogin */ ) => {
  const app= createApp(Login)
  app.mount(el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
