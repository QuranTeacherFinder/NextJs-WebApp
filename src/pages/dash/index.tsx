import { useAuth } from 'lib/context/auth'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'

const Dash = () => {
  //   const router = useRouter()
  //   const { user } = useAuth()
  //   const handleClick = async () => {
  //     const response: any = await axios.get('http://localhost:5000/auth/checkauth', {
  //       withCredentials: true,
  //       headers: {
  //         'Access-Control-Allow-Origin': ' *'
  //       }
  //     })
  //   }

  return <div>Dash </div>
}

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const response: any = await axios.get('http://localhost:5000/auth/checkauth')
//   const user = response.data
//   console.log(user)
//   if (!user) {
//     res.writeHead(307, { Location: '/error' })
//     res.end()
//     return { props: {} }
//   }
//   return {
//     props: {
//       user
//     }
//   }
// }

export default Dash
