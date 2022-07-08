import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../../Main/ComponentsFolder/Navbar'
import Paper from '@mui/material/Paper';
import ContactList from './ContactList';
import styles from '../../../styles/ChatStyles/WholeChatPage.module.css'
import { red } from '@mui/material/colors';
const ChatPage = () => {
  return (
    <>
    <Navbar/>
    <Box className={styles.chatPageMain}>
    <ContactList/>
    </Box>
    </>
  )
}

export default ChatPage