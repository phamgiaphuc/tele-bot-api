import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'

const Member = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8000/api/v1/member')
      .then((res) => {
        setUsers(res.data.allMembers);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, []);
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl my-4 font-semibold text-slate-800'>Members</h1>
      </div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
          <div className='w-full flex justify-center items-center'>
            <div className='w-10/12 overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='w-full text-sm text-left text-gray-400 dark:text-gray-400'>
                <thead className='text-base text-gray-700 normal-case bg-gray-50 dark:bg-gray-700 dark:text-gray-300'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>No.</th>
                    <th scope='col' className='px-6 py-4'>Username</th>
                    <th scope='col' className='px-6 py-4'>User type</th>
                    <th scope='col' className='px-6 py-4'>Group ID</th>
                    <th scope='col' className='px-6 py-4 text-center'>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.user_id} className='text-base bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                      <td className='px-6 py-4'>{index + 1}</td>
                      <th scope='row' className='px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white'>{user.username}</th>
                      <td className='px-6 py-4'>{user.user_type}</td>
                      <td className='px-6 py-4'>{user.group_id}</td>
                      <td className='px-6 py-4'>
                        <div className='flex gap-x-4 justify-center items-center'>
                          <Link to={`/api/v1/member/${user.user_id}`}>
                            <BsInfoCircle className='text-2xl text-green-800'></BsInfoCircle>
                          </Link>
                          <Link to={`/api/v1/member/edit/${user.user_id}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-600'></AiOutlineEdit>
                          </Link>
                          <Link to={`/api/v1/member/delete/${user.user_id}`}>
                            <MdOutlineDelete className='text-2xl text-red-600'></MdOutlineDelete>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      )}
    </div>
  )
}

export default Member