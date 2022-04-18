import { Loading } from 'notiflix/build/notiflix-loading-aio'; 
 
Loading.init({ 
    backgroundColor: 'rgba(0,0,0,0.25)', 
    svgSize: '110px', 
    svgColor: '#ff6b08', 
    // timeout: 3000, 
    clickToClose: false, 
}); 
 
export default Loading;