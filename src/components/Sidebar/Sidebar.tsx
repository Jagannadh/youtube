"use client";
import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function Sidebar() {
  return (
    <div className='w-1/5 px-2 py-2 flex flex-col'>
      <SidebarRow title='Home' Icon={HomeIcon}/>
      <SidebarRow title='Trending' Icon={WhatshotIcon}/>
      <SidebarRow title='Subscriptions' Icon={SubscriptionsIcon}/>
    </div>
  )
}

export default Sidebar