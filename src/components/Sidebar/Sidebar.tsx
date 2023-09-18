"use client";
import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='w-1/5 px-2 py-2 flex flex-col'>
      <SidebarRow title='Home' Icon={HomeIcon}/>
      <SidebarRow title='Trending' Icon={WhatshotIcon}/>
      <SidebarRow title='Subscriptions' Icon={SubscriptionsIcon}/>
      <hr className='my-3'/>
      <SidebarRow title='Library' Icon={VideoLibraryIcon}/>
      <SidebarRow title='History' Icon={HistoryIcon}/>
      <SidebarRow title='Your Videos' Icon={OndemandVideoIcon}/>
      <SidebarRow title='Watch Later' Icon={WatchLaterIcon}/>
      <SidebarRow title='Liked Videos' Icon={ThumbUpAltOutlinedIcon}/>
      <SidebarRow title='Show More' Icon={ExpandMoreOutlinedIcon}/>
    </div>
  )
}

export default Sidebar