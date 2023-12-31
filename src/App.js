import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, Navbar, Feed, SearchFeed } from './Components';
// import {  '#fffde7' } from "@mui/material/colors";


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: 'grey' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter >
);

export default App;