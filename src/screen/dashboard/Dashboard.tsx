import { ScrollView, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import Stories from '../../components/Stories'
import Post from '../../components/Posts';

const Dashboard = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{flex: 1, backgroundColor: 'white'}}>
      <HomeHeader />
      <Stories />
      <Post />
    </ScrollView>
  )
};

export default Dashboard;