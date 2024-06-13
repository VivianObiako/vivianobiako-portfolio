import './App.css'
import { Center, Text } from '@chakra-ui/react'
import Logo from './assets/icons/Logo'

function App() {
  return (
    <Center h='100vh' flexDir={'column'} gap={'24px'}>
      <Logo h={'64px'} w={'64px'} />
      <Text as={'h1'} textAlign={'center'}>Hi 👋🏾, I'm Vivian and this site is in progress ⛔</Text>
    </Center>
  )
}

export default App
