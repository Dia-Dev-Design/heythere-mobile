import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ 
      width: '100%', 
      height: '100%', 
      flexDirection: 'row',
    }}>
      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 20,
          backgroundColor: '#F8FAFF', // Background-primary-default
          alignItems: 'center',
          gap: 30,
        }}
      >
        <View style={{ 
          alignSelf: 'stretch', 
          height: 309, 
          backgroundColor: 'white' 
        }} />
        
        <View style={{ 
          alignSelf: 'stretch', 
          height: 311, 
          backgroundColor: 'white' 
        }} />
        
        <View style={{ 
          alignSelf: 'stretch', 
          height: 309, 
          backgroundColor: 'white' 
        }} />
        
        <View style={{ 
          alignSelf: 'stretch',
          paddingTop: 32,
          paddingBottom: 32,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ 
            textAlign: 'center',
            color: '#706D74', // General-medium-emphasis
            fontSize: 12,
            fontFamily: 'Libre Franklin',
            fontWeight: '500',
            lineHeight: 16,
            letterSpacing: 0.5,
          }}>
            2025 © Heythere - All Rights Reserved.
          </Text>
        </View>
      </ScrollView>
      
      <View style={{ 
        width: 6,
        backgroundColor: '#CDCDCF', // General-disabled-medium-emphasis
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <View style={{ 
          width: 6,
          height: 103,
          position: 'absolute',
          top: 0,
          backgroundColor: '#7AA7FE', // Border-primary-medium-emphasis
        }} />
      </View>
    </View>
  );
}
