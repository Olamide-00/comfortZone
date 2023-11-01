import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Favourite() {
  return (
    <TouchableOpacity >
      <Ionicons name='heart' size={30} color="gray" />
    </TouchableOpacity>
  )
}