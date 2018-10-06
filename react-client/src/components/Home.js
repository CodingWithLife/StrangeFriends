import React from 'react';
//import 'react-clien/dist/Home.css'
import Chat from "./Chat.js"

const Home = () => {
return (
  <div class="page">
    <div class="body">
      <div id="featured">
         <center><h3>Stranger Friend</h3></center>
         <center>
           <h2>This site will allow stranges to become friends</h2>
          </center>
          <center>
            <h2>This will be based on archetypes</h2>

          </center>
      </div>
  </div>
    <div class="footer">
    <Chat />
    </div>
</div>
  );
}


export default Home;
