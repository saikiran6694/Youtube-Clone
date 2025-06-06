import React, { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
import { BrowserCompatilibilityService } from './utils/BrowserCompatibilityService';

const App = () => (
  const isUserBrowserCompatibleForOurChatUI = useMemo(() => {
        return BrowserCompatilibilityService.isUserBrowserCompatibleWithOurChat();
  }, []);

  console.log("compatibility: ", isUserBrowserCompatibleForOurChatUI)

  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
